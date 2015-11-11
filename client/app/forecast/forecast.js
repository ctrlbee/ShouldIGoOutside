angular.module('gooutside.forecast', [])

.controller('ForecastController', function ($rootScope, $scope, $window, $location, Forecast){
  //get the forecastObj, would prefer to do this without having to make the call below
  $scope.init = function (){
    $scope.city = Forecast.getCity(); 
    $scope.forecast = Forecast.getForecastArr(); 
  }
  $scope.backToLocations = function () {
    $location.path('/locations'); 
  }

});
