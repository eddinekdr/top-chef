var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var lafourchette = require('./lafourchette.js');

console.log("< Explication du code  >");
console.log("             ");
console.log("Les restaurants étoilés qui ont une promo sont affichés dans la console à quelques erreurs près !");
console.log("             ");
console.log("aller sur <http://www.localhost:8081/scrape> pour lancer le scappring et revenir sur la console");

//Principale fonction
module.exports.restaurants = function(nbPage) {
  
  var url = "https://restaurant.michelin.fr/restaurants/france/restaurants-michelin/page-0"+nbPage;// Ne prends uniquement les restaurants étoilés
  request(url, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var listresto=[];
      
      //Récupération les noms des restaurants de michelin
      $(".poi_card-display-title").each(function(index, element){
        var a = $(element);
        var CurrentRestaurant = {};
        CurrentRestaurant.name = a.text().trim();
        listresto.push(CurrentRestaurant);
      });

     console.log("Affichage des restaurants de michelin qui sont étoilés par page");
     console.log(listresto);
     console.log("----------------------------------------------------------------------------------");
     
     for(var i=0; i<listresto.length;i++)
       {
     lafourchette.restaurants2(1,listresto[i].name);
       }
     
     return listresto;
    
    }
    
    else{
      console.log("errormichelin");
    }
   
  });
 
}
