var michelin = require('./michelin.js');
//var promo = require('./promo.js');
var express = require('express');
var app     = express();

app.get('/scrape', function(req, res){
    	var restoetoile= [];
    	for(var i=1; i<=240; i++){
        restoetoile = michelin.restaurants(i);
        //faire en sorte que cela apparaissent dans le localhost si possible sinon avec ej6
        res.render({ express: michelin.restaurants(i)});
        //restoetoile = michelin.restaurants(2);
    }
})

app.listen('8081')
console.log('Magic happens on port 8081');
//exports = module.exports = app;