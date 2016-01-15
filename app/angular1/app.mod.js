var app = angular.module('app', [
  'ngRoute',
  'main',
  'menu',
  'json',
  'form'
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

      when('/form', {
        templateUrl: 'app/angular1/form/form.html',
      }).

      otherwise({
        redirectTo: '/main'
      });

  }]);
