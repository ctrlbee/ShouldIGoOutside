angular.module('gooutside.services', [])

.factory('Forecast', function ($http, $location, $window){

  var getForecast = function (){
    return $http({
      url: 'http://localhost:8000/api/forecast', 
      method: 'GET'
    })
    .then(function (resp) {
      return resp.data;
    });    
  };

  return {
    getForecast: getForecast
  }

})
.factory('Locations', function ($http, $location, $window){

  return {

  }

})
