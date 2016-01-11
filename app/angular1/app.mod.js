var app = angular.module('app', [
  'ngRoute',
  'main'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: 'app/angular1/main/main.html',
        //controller: 'mainController'
      }).
      // when('/phones/:phoneId', {
      //   templateUrl: 'partials/phone-detail.html',
      //   controller: 'PhoneDetailCtrl'
      // }).
      otherwise({
        redirectTo: '/main'
      });
  }]);
