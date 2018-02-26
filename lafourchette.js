var request = require('request');
var cheerio = require('cheerio');


function restaurants(nbPage) {
  var url = "https://www.lafourchette.com/restaurant+paris#sort=QUALITY_DESC&page="+nbPage;

  request(url, function (error, response, html) {
    if (!error && response.statusCode == 200) {

      var $ = cheerio.load(html);
      $(".resultItem").find(".resultItem-name").each(function(index, element){
        var a = $(element);
        console.log(a.text().trim())
        //count(a);
      });
    }
  });
}

var result;
for (var i = 1; i <= 3; i++) {
  restaurants(i);
}
