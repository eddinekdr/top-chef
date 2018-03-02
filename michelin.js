var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
//var alert= require('alert');
//var app = express();
//fs.write()
//header('Content-Type: text/plain; charset=utf-8'); 

function restaurants(nbPage, callback) {
  //var url = "https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-0"+nbPage;
  var url = "https://restaurant.michelin.fr/restaurants/france/restaurants-michelin/page-0"+nbPage;// Ne prends uniquement les restaurants étoilés
  //https://restaurant.michelin.fr/restaurants/france/restaurants-michelin/page-0
  //https://restaurant.michelin.fr/restaurants/france/restaurants-michelin
  request(url, function (error, response, html) {
    if (!error && response.statusCode == 200) {

      var $ = cheerio.load(html);
      var listresto=[];
      $(".poi-search-result").find(".poi_card-display-title").each(function(index, element){
        var a = $(element);
        var CurrentRestaurant = {};
        CurrentRestaurant.name = a.text().trim();
        listresto.push(CurrentRestaurant);
                //console.log(a.length);
        //
        //count(a);
      });
      fs.appendFile('Michelin_.json',   listresto , 'utf-8')
      console.log(listresto);
      callback();

    }
    return listresto;
  });
}
restaurants(1, function(){
  });