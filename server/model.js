var http = ('http'); 
var request = require('request');

module.exports = {
  getForecast: function (cb) {   
    var url = 'https://api.forecast.io/forecast/dac84558635caba464c636241e3c5b1e/37.8267,-122.423';

    request(url, function (error, response, json) {
      if (!error && response.statusCode == 200) {
        cb(json); 
      }
    }); 
  }
};
