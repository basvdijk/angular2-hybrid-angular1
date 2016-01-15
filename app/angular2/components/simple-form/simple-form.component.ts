import {Component, View} from "angular2/core";

// import {FORM_DIRECTIVES} from "angular2/common";

@Component({
  selector: "simple-form",
  // directives: [FORM_DIRECTIVES],
})

@View({
    templateUrl: "../app/angular2/components/simple-form/simple-form.html"
})

export class SimpleForm {
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
