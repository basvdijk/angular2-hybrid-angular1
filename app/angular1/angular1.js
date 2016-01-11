System.register(["angular2/upgrade", "../components/hello/hello"], function(exports_1) {
    "use strict";
    var upgrade_1, hello_1;
    var adapter;
    return {
        setters:[
            function (upgrade_1_1) {
                upgrade_1 = upgrade_1_1;
            },
            function (hello_1_1) {
                hello_1 = hello_1_1;
            }],
        execute: function() {
            // Create a new upgrade adapter
            adapter = new upgrade_1.UpgradeAdapter();
            // Downgrade Angular 2 component as a directive
            angular.module("angular-legacy").directive("hello", adapter.downgradeNg2Component(hello_1.Hello));
            // Bootstrap the Angular 1 app
            adapter.bootstrap(document.body, ["angular-legacy"]);
        }
    }
});
//# sourceMappingURL=angular1.js.map