
import {Component} from "angular2/core";
import {UpgradeAdapter} from "angular2/upgrade";
import {bootstrap} from "angular2/platform/browser";

import {Hello} from "./components/hello/hello";

declare let angular: any;

// Create a new upgrade adapter
let adapter: UpgradeAdapter = new UpgradeAdapter();

// Downgrade Angular 2 component as a directive
angular.module("app").directive("hello", adapter.downgradeNg2Component(Hello));

// Bootstrap the Angular 1 app
adapter.bootstrap(document.body, ["app"]);
