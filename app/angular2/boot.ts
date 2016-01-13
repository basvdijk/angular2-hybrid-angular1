
import {Component} from "angular2/core";
import {UpgradeAdapter} from "angular2/upgrade";
import {bootstrap} from "angular2/platform/browser";

import {Hello} from "./components/hello/hello";
import {Tasks} from "./components/tasks/tasks.component";

// Make Angular available inside typescript. Since the angular variable is not
// declared inside Typescript. We need to define it to make it available
declare let angular: any;

// Create a new upgrade adapter
let adapter: UpgradeAdapter = new UpgradeAdapter();

// Downgrade Angular 2 component as a directive
angular.module("app").directive("hello", adapter.downgradeNg2Component(Hello));
angular.module("app").directive("tasks", adapter.downgradeNg2Component(Tasks));

// Bootstrap the Angular 1 app
adapter.bootstrap(document.body, ["app"]);
