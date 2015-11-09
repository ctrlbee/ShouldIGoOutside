var moment = require('moment'); 

module.exports = { 
  forecastParser: function (rawJSON, cb){
    var json = JSON.parse(rawJSON); 
    var hourly = json.hourly.data; 
    var hourlyArr = []; 
    for (var i = 0; i < hourly.length; i++) {
      //this should probably be a seperate model 
      //best time might need a callback
      var bestTime = checkBestTime(hourly[i].temperature, hourly[i].icon, hourly[i].windSpeed);
      var date = moment(hourly[i].time*1000);
      var resObj = {
        time: date.format("hA"), 
        day: date.format("ddd"), 
        temp: hourly[i].temperature, 
        summary: hourly[i].summary, 
        windSpeed: hourly[i].windSpeed,
        icon: hourly[i].icon, 
        bestTime: bestTime
      }
      hourlyArr.push(resObj);
    };

    cb(hourlyArr); 
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

