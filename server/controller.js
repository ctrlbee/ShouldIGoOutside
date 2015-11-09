var app = require('./server.js'); 
var model = require('./model.js'); 

module.exports = function (app){
  app.get("/api/locations", function (req, res){
    model.getLatLng(function (lat, lng){
      res.send(JSON.stringify({lat: lat, lng: lng})); 
    })
  });
  app.get("/api/forecast", function (req, res){
    model.getForecast(function (json){
      res.send(json); 
    }); 
  });
}

