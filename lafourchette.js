var request = require('request');
var cheerio = require('cheerio');


function restaurants2(nbPage) {
  var url = "https://www.lafourchette.com/search-refine/"+rest_+"?page="+nbPage;
            https://www.lafourchette.com/search-refine/caf%C3%A9%20le%20capitole
  var options = {
    url : "https://www.lafourchette.com/search-refine/"+rest_+"?page="+nbPage,
    headers: {
   'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.167 Safari/537.36'
    }
};

  request(options, function (error, response, html) {
      if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
        $(".list-unstyled").find(".resultItem").find(".resultItem-name").each(function(index, element){
        //if(a= rest_){
        var a = $(element) ;
        console.log(a.text().trim());
      });
    }
  else {
    console.log("Error")
    console.log(response.statusCode)
  }
  });
}
var rest_="chao-em"
for (var i = 1; i <=1 ; i++) {
  restaurants2(i);
}
