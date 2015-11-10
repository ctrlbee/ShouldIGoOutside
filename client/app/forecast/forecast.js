angular.module('gooutside.forecast', [])

.controller('ForecastController', function ($rootScope, $scope, $window, Forecast){
  //get the forecastObj, would prefer to do this without having to make the call below
  //$rootScope.$apply(); - didn't work 
  $scope.updateForecast = function (){
    $scope.forecast = Forecast.getForecastObj(); 
  }

});
