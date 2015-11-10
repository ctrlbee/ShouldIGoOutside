angular.module('gooutside', [
  'gooutside.services',
  'gooutside.forecast',
  'gooutside.locations',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/forecast', {
      templateUrl: '/app/forecast/forecast.html',
      controller: 'ForecastController'
    })
    .when('/locations', {
      templateUrl: '/app/locations/locations.html',
      controller: 'LocationsController'
    })
    .otherwise({
      redirectTo: '/locations',
      templateUrl: '/app/locations/locations.html',
      controller: 'LocationsController'
    });
});
