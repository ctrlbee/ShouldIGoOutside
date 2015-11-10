angular.module('gooutside.services', [])

.factory('Forecast', function ($http, $location, $window){

  var forecastObj = {}; 
  var getForecast = function (zip){
   return $http({
      url: '/api/locations?zip='+zip+'', 
      method: 'GET'
    })
    .then(function (coords) {
      return $http({
        url: 'api/forecast?lat='+coords.data.lat+'&lng='+coords.data.lng+'', 
        method: 'GET'
      })
        .then(function (fcst){
          console.log("in fcst");
          forecastObj = fcst;  
          console.log(forecastObj);
          return "done"; 
        })
    });    
  };

  var getForecastObj = function (){
    return forecastObj; 
  }

  return {
    getForecast: getForecast,
    forecastObj: forecastObj, 
    getForecastObj: getForecastObj
  }

}); 
