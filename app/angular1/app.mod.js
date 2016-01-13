var app = angular.module('app', [
  'ngRoute',
  'main',
  'menu',
  'json'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.

      when('/main', {
        templateUrl: 'app/angular1/main/main.html',
      }).

      when('/json', {
        templateUrl: 'app/angular1/json/json.html',
      }).

      otherwise({
        redirectTo: '/main'
      });

  }]);
