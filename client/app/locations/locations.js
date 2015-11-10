angular.module('gooutside.locations', [])

.controller('LocationsController', function ($scope, $window, $location, Forecast){
  $scope.getForecastByZip = function (){
    var zip = $scope.zipInput; 
    Forecast.getForecast(zip)
      .then(function(){
        $location.path("/forecast"); 
      });
  }; 
});
