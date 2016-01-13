var json = angular.module('json', []);

json.controller('jsonController', ['CitiesDataService', function(CitiesDataService) {

  var vm = this;

  console.log(CitiesDataService);

  vm.service = CitiesDataService;

}]);
