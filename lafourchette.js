//var michelin = require('./michelin.js');
var request = require('request');
var cheerio = require('cheerio');


//Principale fonction
module.exports.restaurants2 = function(nbPage,listresto) {
  var url = "https://www.lafourchette.com/search-refine/"+listresto[0]["name"]+"?page="+nbPage;
  var options = {
    url : "https://www.lafourchette.com/search-refine/"+listresto["name"]+"?page="+nbPage,
    headers: {
   'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.167 Safari/537.36'
    }
};

  request(options, function (error, response, html) {
      if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var listresto=[];
        $(".list-unstyled").find(".resultItem").find(".resultItem-name").each(function(index, element){
        var a = $(element);
        var CurrentRestaurant = {};
        CurrentRestaurant.name = a.text().trim();
        listresto.push(CurrentRestaurant);
      });
     // fs.appendFile('Michelin_.json',   listresto , 'utf-8')
     console.log("dans la fourchette");
      console.log(listresto);
      console.log(url);

    }
    else{
      console.log("error")
    }
    return listresto;
  });
}