angular.module('gooutside.services', [])

.factory('Forecast', function ($http, $location, $window){

  var forecastObj = {}; 
  var city = ""; 
  var getForecast = function (zip){
   return $http({
      url: '/api/locations?zip='+zip+'', 
      method: 'GET'
    })
    .then(function (coords) {
      city = coords.data.address;  
      return $http({
        url: 'api/forecast?lat='+coords.data.lat+'&lng='+coords.data.lng+'', 
        method: 'GET'
      })
        .then(function (fcst){
          forecastObj = fcst;  
          console.log(forecastObj);
          return "done"; 
        })
    });    
  };

  var getForecastArr = function (){
    console.log("getting arr", forecastObj.data.results);
    return forecastObj.data.results; 
  };

  var getCity = function (){
    console.log('getting city', city);
    return city; 
  };

  var hasBestTimes = function (){
    console.log(forecastObj.data.results.length);
    var ret = false; 
    for (var i = 0; i < forecastObj.data.results.length; i++) {
      console.log(forecastObj.data.results[i].bestTime);
      if(forecastObj.data.results[i].bestTime){
        return true; 
      }
    };
    return ret; 
  }

  return {
    hasBestTimes: hasBestTimes, 
    getCity: getCity, 
    getForecast: getForecast,
    forecastObj: forecastObj, 
    getForecastArr: getForecastArr
  }

}); 
