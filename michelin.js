var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express()


// The URL we will scrape from
//v<ar url = 'https://www.leboncoin.fr/ventes_immobilieres/1026430112.htm?ca=12_s';


module.exports = {
  getDataFromWebSite: function(url, callback){
    var json = { title : ""};

          // The structure of our request call
          // The first parameter is our URL
          // The callback function takes 3 parameters, an error, response status code and the html
            request(url, function(error, response, html){
                    if(!error){
                        var $ = cheerio.load(html);

                        var title;

                        // We'll use the unique header class as a starting point.
                        // Title class is named "no-border". It's unique in the page.
                        $('.no-border').filter(function(){
                            var data = $(this);
                            title = data.text();

                        })


                        // Ajust title.
                        title = title.substring(14, title.length);
                        var index = title.indexOf("\n");
                        title = title.substring(0, index);


                        json.type = type;
                        json.title = title;

                        console.log(title)
                      
                        response = json;

                    }

                    // To write to the system we will use the built in 'fs' library.
                    // In this example we will pass 3 parameters to the writeFile function
                                    // Parameter 1 :  output.json - this is what the created filename will be called
                    // Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
                    // Parameter 3 :  callback function - a callback function to let us know the status of our function

                    fs.writeFile('outputLeboncoin.json', JSON.stringify(json, null, 4), function(err){

                        console.log('File successfully written! - Check your project directory for the outputLeboncoin.json file');

                    })
                      return callback(json);

                    })
  }
}
