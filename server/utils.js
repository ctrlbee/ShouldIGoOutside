var moment = require('moment'); 

module.exports = { 
  forecastParser: function (rawJSON, cb){
    var json = JSON.parse(rawJSON); 
    var hourly = json.hourly.data; 
    var resObj = {}; 
    resObj.results = []; 
    for (var i = 0; i < hourly.length; i++) {
      //this should probably be a seperate model 
      var bestTime = checkBestTime(hourly[i].temperature, hourly[i].icon, hourly[i].windSpeed);
      var date = moment(hourly[i].time*1000);
      var hourlyObj = {
        time: date.format("hA"), 
        day: date.format("ddd"), 
        temp: hourly[i].temperature, 
        windSpeed: hourly[i].windSpeed,
        summary: hourly[i].summary, 
        icon: hourly[i].icon, 
        bestTime: bestTime
      }
      resObj.results.push(hourlyObj);
    };

    cb(resObj); 
  }
};

var checkBestTime = function (temp, icon, windSpeed){
  if(temp>50 && temp<85 && goodConditions.indexOf(icon)>=0 && windSpeed<12){
    return true;
  }
  return false;
};

var goodConditions = [
  'clear-night',
  'clear-day',
  'partly-cloudy-day',
  'partly-cloudy-night'
];

