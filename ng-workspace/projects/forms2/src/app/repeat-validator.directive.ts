import { Directive, forwardRef } from '@angular/core';
import {Validator, AbstractControl, ValidationErrors, NG_VALIDATORS} from '@angular/forms';


@Directive({
  selector: 'form[repeat]',
  providers: [
    {provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => RepeatValidatorDirective)}
  ]
})
export class RepeatValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    debugger;
    return null;
  }
}
