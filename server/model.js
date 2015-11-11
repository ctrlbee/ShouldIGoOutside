var http = ('http'); 
var request = require('request');
var utils = require('./utils.js'); 

module.exports = {
  getForecast: function (lat, lng, cb) {   
    var url = 'https://api.forecast.io/forecast/dac84558635caba464c636241e3c5b1e/'+lat+','+lng+'';

    request(url, function (error, response, json) {
      if (!error && response.statusCode == 200) {
        //parse json and pull out relevant fields 
        var parsed = utils.forecastParser(json);  
        cb(parsed);
      }
    }); 
  }, 

  getLatLng: function (zip, cb){
    var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+zip+'&components=postal_code&key=AIzaSyCSdh0CTMXGNSBS6LRFQ1MhHdYdML0t1OI'; 

    request(url, function (error, response, json){
      if(error){
        console.log(error);  
      } else if(response.statusCode == 200){
        //parse response, get lat/long 
        var parsed = JSON.parse(json);
        if(parsed.status === 'ZERO_RESULTS'){
          cb("bad zip", "bad zip", "bad zip"); 
        } else {
          var lat = parsed.results[0].geometry.location.lat; 
          var lng = parsed.results[0].geometry.location.lng;
          var address = parsed.results[0].formatted_address;  
          cb(lat, lng, address); 
        }
      }
    });
  }
};



