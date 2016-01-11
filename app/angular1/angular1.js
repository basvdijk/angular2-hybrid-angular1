System.register(["angular2/upgrade", "../components/home/home.component", "../components/algorithms/algorithms"], function(exports_1) {
    "use strict";
    var upgrade_1, home_component_1, algorithms_1;
    var adapter;
    return {
        setters:[
            function (upgrade_1_1) {
                upgrade_1 = upgrade_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (algorithms_1_1) {
                algorithms_1 = algorithms_1_1;
            }],
        execute: function() {
            adapter = new upgrade_1.UpgradeAdapter();
            angular.module("angular-legacy").directive("algorithms", adapter.downgradeNg2Component(algorithms_1.Algorithms));
            angular.module("angular-legacy").directive("my-app", adapter.downgradeNg2Component(home_component_1.AppComponent));
            // angular.module("angular-legacy").directive("add",adapter.downgradeNg2Component(Adder));
            // angular.module("angular-legacy").directive("counterButton",adapter.downgradeNg2Component(Counter));
            adapter.bootstrap(document.body, ["angular-legacy"]);
        }
    }
});
//# sourceMappingURL=angular1.js.map