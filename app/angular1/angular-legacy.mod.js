angular.module('angular-legacy',[]);

angular.module('angular-legacy').controller('testController', function() {

    this.message = 'Angular 1.x integrating with Angular 2.0 components';

    this.operands = {op1:10, op2:20};

    this.value = {current:100, previous:null};

    this.increment = function(){
      this.operands.op1 += 1;
      this.operands.op2 += 1;
    };
});
