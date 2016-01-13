var app = angular.module('app', [
  'ngRoute',
  'main',
  'menu'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.

      when('/main', {
        templateUrl: 'app/angular1/main/main.html',
      }).

      when('/json', {
        templateUrl: 'app/angular1/main/json.html',
      }).

      otherwise({
        redirectTo: '/main'
      });

  }]);
