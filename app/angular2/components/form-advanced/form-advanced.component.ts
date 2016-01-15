// Based on http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/

import {Component, View} from "angular2/core";

import {
  FORM_DIRECTIVES,
  FormBuilder,
  ControlGroup
} from "angular2/common";

@Component({
  selector: "form-advanced",
  // directives: [FORM_DIRECTIVES], // causes blank page when enabled
})

@View({
    templateUrl: "../app/angular2/components/form-advanced/form-advanced.html"
})

export class FormAdvanced {
  myForm: ControlGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      "sku": ["ABC123"]
    });
  }

  onSubmit(value: string): void {
    console.log("you submitted value: ", value);
  }
}

/*
https://github.com/angular/angular/blob/master/modules/angular2/src/common/forms/directives.ts
export const FORM_DIRECTIVES: Type[] = CONST_EXPR([
  NgControlName,
  NgControlGroup,

  NgFormControl,
  NgModel,
  NgFormModel,
  NgForm,

  NgSelectOption,
  DefaultValueAccessor,
  NumberValueAccessor,
  CheckboxControlValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,

  RequiredValidator,
  MinLengthValidator,
  MaxLengthValidator
]);
Status API Training Shop Blog About Pricing

*/
