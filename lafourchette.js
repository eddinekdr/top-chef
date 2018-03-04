var request = require('request');
var cheerio = require('cheerio');

var fs = require('fs');

//Principale fonction
module.exports.restaurants2 = function(nbPage,listresto) {
  var options = {
    //url : "https://www.lafourchette.com/search-refine/"+listresto+"?page="+nbPage,
    url : "https://www.lafourchette.com/search-refine/"+listresto+"?page="+nbPage,
    headers: {
   'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.167 Safari/537.36'
    //mettre un cookie si cela bloque

    }
};

var listresto2=[];
var listpromo=[];

  request(options, function (error, response, html) {
      if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var CurrentRestaurant = {};

        
        //Restaurant scrappé sur LaFourchette
        $(".resultItem-name").each(function(index, element){
        var a = $(element);
        CurrentRestaurant.namelafourchette = a.text().trim();
        if((a.text().trim() != ("Matsuri Marbeuf"))&&(a.text().trim() != ("Les Orientalistes"))&& (a.text().trim() != ("Bistrot de l'Opéra Comique"))&& (a.text().trim() != ("Le 23 Clauzel - Julie Rivière -"))&&(a.text().trim() != ("Restaurant Bon"))&&(a.text().trim() != ("Vin et Marée Maine-Montparnasse"))&&(a.text().trim() != ("Ao Izakaya")) && (a.text().trim() != ("Le Train Bleu"))&& (a.text().trim() != ("test"))){
        listresto2.push(CurrentRestaurant);}
        });
        
        //Restaurants de Michelin 
        CurrentRestaurant.namemichelin = listresto;
             

        $('.resultItem-saleType').each(function(index, element){
        var b = $(element);
        CurrentRestaurant.promo = b.text().trim();
        if(b.text().trim() != "Non réservable sur LaFourchette"){
        listpromo.push(CurrentRestaurant);}
        });
      
      //affichage de urls sur lafourchette
      console.log(options.url);
      //affichage des promos sur la fourchette
      console.log(listpromo[0]);
      //affichage des restaurants sur la fourchete
      console.log(listresto2[0]);
      console.log("                     ");
  
    }
    return listresto2;
  });







}