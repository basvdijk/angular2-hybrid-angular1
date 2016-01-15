

import {Component, View} from "angular2/core";

import {
  FORM_DIRECTIVES,
  FormBuilder,
  ControlGroup,
  Validators,
  Control,
  AbstractControl,
} from "angular2/common";

@Component({
  selector: "form-advanced-validation",
  // directives: [FORM_DIRECTIVES], // causes blank page when enabled
})

@View({
    templateUrl: "../app/angular2/components/form-advanced-validation/form-advanced-validation.html"
})

export class FormAdvancedValidation {
  myForm: ControlGroup;
  sku: AbstractControl;
  productName: string;

  constructor(fb: FormBuilder) {

    this.myForm = fb.group({
      "sku":  ["", Validators.compose([Validators.required])],
      "sku2":  ["", Validators.compose([this.skuValidator])],
      "productName":  ["", Validators.required]
    });

    // Get the Control from the FormBuilder group
    this.sku = this.myForm.controls["sku"];

    // Watch for changes on the form field
    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log("sku changed to: ", value);
      }
    );

    // Watch for changes on the form object
    this.myForm.valueChanges.subscribe(
      (value: string) => {
        console.log("form changed to: ", value);
      }
    );

  }



  // sku.valueChanges.subscribe(
  //   (value: string) => {
  //     console.log("sku changed to: ", value);
  //   }
  // );

  // onSubmit(value: string): void {
  //   console.log("you submitted value: ", value);
  // }

  // Custom validator
  skuValidator(control: Control): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
      return {invalidSku: true};
    }
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
