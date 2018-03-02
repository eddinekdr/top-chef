var michelin = require('./michelin.js');
var express = require('express');
var app     = express();
app.get('/scrape', function(req, res){
    for (var i = 1; i <= 1; i++) {
        michelin.restaurants(i);
}   
})

app.listen('8081')
console.log('Magic happens on port 8081');
//exports = module.exports = app;