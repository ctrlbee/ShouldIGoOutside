var app = require('./server.js'); 
var model = require('./model.js'); 

module.exports = function (app){
  app.get("/api/locations", function (req, res){
    var zip = req.query.zip || '94115';  
    model.getLatLng(zip, function (lat, lng, addy){
      res.send(JSON.stringify({lat: lat, lng: lng, address: addy})); 
    })
  });
  app.get("/api/forecast", function (req, res){
    var lat = req.query.lat || 37.828; 
    var lng = req.query.lng || -122.423; 
    model.getForecast(lat, lng, function (json){
      //res.header("Content-Type", "application/json");
      res.send(JSON.stringify(json)); 
    }); 
  });
}

