angular.module('gooutside.forecast', [])

.controller('ForecastController', function ($scope, $window, Forecast){
  $scope.getForecast = function (){
    Forecast.getForecast()
    .then(function (forecast){
      $scope.forecast = forecast; 
    })
  }; 

});
