import {Component, View} from "angular2/core";
import {SayHello} from "../say-hello/say-hello";

@Component({
    selector: "hello"
})

@View({
    templateUrl: "../app/angular2/components/hello/hello.html",
    directives: [SayHello]
})

export class Hello {

}
