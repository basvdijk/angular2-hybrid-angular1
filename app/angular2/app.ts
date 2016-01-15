
import {Component} from "angular2/core";
import {UpgradeAdapter} from "angular2/upgrade";
import {bootstrap} from "angular2/platform/browser";

import {HTTP_PROVIDERS} from "angular2/http";

import "rxjs/add/operator/map";

import {Hello} from "./components/hello/hello";
import {Tasks} from "./components/tasks/tasks.component";
import {Cities} from "./components/cities/cities.component";
import {FormSimple} from "./components/form-simple/form-simple.component";

// Make Angular available inside typescript. Since the angular variable is not
// declared inside Typescript. We need to define it to make it available
declare let angular: any;

// Create a new upgrade adapter
let adapter: UpgradeAdapter = new UpgradeAdapter();

// Downgrade Angular 2 component as a directive
// Use Angular 1 casing like demo-form becomes demoForm
angular.module("app").directive("hello", adapter.downgradeNg2Component(Hello));
angular.module("app").directive("tasks", adapter.downgradeNg2Component(Tasks));
angular.module("app").directive("cities", adapter.downgradeNg2Component(Cities));
angular.module("app").directive("formSimple", adapter.downgradeNg2Component(FormSimple));

import {CitiesDataService} from "./components/cities/cities.data.srv";
adapter.addProvider(CitiesDataService);
angular.module("app").factory("CitiesDataService", adapter.downgradeNg2Provider(CitiesDataService));

adapter.addProvider(HTTP_PROVIDERS);

// Bootstrap the Angular 1 app
adapter.bootstrap(document.body, ["app"]);
