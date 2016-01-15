import {Component, View} from "angular2/core";

// import {FORM_DIRECTIVES} from "angular2/common";

@Component({
  selector: "form-simple",
  // directives: [FORM_DIRECTIVES],
})

@View({
    templateUrl: "../app/angular2/components/form-simple/form-simple.html"
})

export class FormSimple {
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
