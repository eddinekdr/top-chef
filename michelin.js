var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');



//Principale fonction
module.exports.restaurants = function(nbPage) {
  
  var url = "https://restaurant.michelin.fr/restaurants/france/restaurants-michelin/page-0"+nbPage;// Ne prends uniquement les restaurants étoilés
  request(url, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var listresto=[];
      $(".poi_card-display-title").each(function(index, element){
        var a = $(element);
        var CurrentRestaurant = {};
        CurrentRestaurant.name = a.text().trim();
        listresto.push(CurrentRestaurant);
      });
     // fs.appendFile('Michelin_.json',   listresto , 'utf-8')
     console.log("michelin");
     //return listresto;
   

    }
    else{
      console.log("error")
    }
    console.log(listresto);
    return listresto;
  });
}
