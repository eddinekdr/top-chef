var michelin = require('./michelin.js');
var lafourchette = require('./lafourchette.js');
var express = require('express');
var app     = express();
app.get('/scrape', function(req, res){
    for (var i = 1; i <= 1; i++) {
    	var restoetoile= [];
    	var currentrestoetoile = {};
        //michelin.restaurants(i);
        currentrestoetoile.name = michelin.restaurants(i);
        restoetoile.push(currentrestoetoile);
        console.log(currentrestoetoile);
        lafourchette.restaurants2(i,restoetoile);
}   
})

app.listen('8081')
console.log('Magic happens on port 8081');
//exports = module.exports = app;