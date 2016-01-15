// Based on http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/

import {Component, View} from "angular2/core";

@Component({
  selector: "form-simple",
})

@View({
    templateUrl: "../app/angular2/components/form-simple/form-simple.html"
})

export class FormSimple {
  onSubmit(value: string): void {
    console.log("you submitted value: ", value);
  }
}
