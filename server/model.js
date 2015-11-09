var http = ('http'); 
var request = require('request');
var utils = require('./utils.js'); 

module.exports = {
  getForecast: function (cb) {   
    var url = 'https://api.forecast.io/forecast/dac84558635caba464c636241e3c5b1e/37.8267,-122.423';

    request(url, function (error, response, json) {
      if (!error && response.statusCode == 200) {
        //parse json and pull out relevant fields 
        utils.forecastParser(json, function(data){
         cb(cb(data)); //refactor this madness to promises 
        })
      }
    }); 
  }, 

  getLatLng: function (cb){
    var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=94115&components=postal_code&key=AIzaSyCSdh0CTMXGNSBS6LRFQ1MhHdYdML0t1OI'; 

    request(url, function (error, response, json){
      if(!error && response.statusCode == 200){
        
        //parse response, get lat/long 
        var parsed = JSON.parse(json);
        var lat = parsed.results[0].geometry.location.lat; 
        var lng = parsed.results[0].geometry.location.lng; 

        cb(lat, lng); 
      }
    });
  }
};



