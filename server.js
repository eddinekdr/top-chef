var michelin = require('./michelin.js');
var lafourchette = require('./lafourchette.js');
var express = require('express');
var app     = express();
app.get('/scrape', function(req, res){
    for (var i = 1; i <= 1; i++) {
    	var restoetoile= [];
        var b = michelin.restaurants(i);
        var currentRest = {};
        currentRest.name = b.text().trim();
        restoetoile.push(currentRest);
        console.log("essai");
        console.log(restoetoile);
        //console.log(restoetoile[2]);

        	//restoetoile[2];
        	//lafourchette.restaurants2(i,restoetoile[2]);
}   
})


app.listen('8081')
console.log('Magic happens on port 8081');
//exports = module.exports = app;