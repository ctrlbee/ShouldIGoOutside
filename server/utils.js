var moment = require('moment'); 

module.exports = { 
  forecastParser: function (rawJSON, cb){
    var json = JSON.parse(rawJSON); 
    var hourly = json.hourly.data; 
    var hourlyArr = []; 
    for (var i = 0; i < hourly.length; i++) {
      //this should probably be a seperate model 
      //best time might need a callback
      var bestTime = checkBestTime(hourly[i].temperature, hourly[i].summary, hourly[i].windSpeed);
      var date = moment(hourly[i].time*1000);
      var resObj = {
        time: date.format("hA"), 
        day: date.format("ddd"), 
        temp: hourly[i].temperature, 
        summary: hourly[i].summary, 
        windSpeed: hourly[i].windSpeed, 
        bestTime: bestTime
      }
      hourlyArr.push(resObj);
    };

    cb(hourlyArr); 
  }
}

var checkBestTime = function (temp, summary, windSpeed){
  if(temp>50){
    return true; 
  }
}


