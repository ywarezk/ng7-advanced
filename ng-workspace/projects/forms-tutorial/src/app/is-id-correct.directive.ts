import { Directive, forwardRef } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[ngModel][isIdCorrect]',
  providers: [
    {provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => IsIdCorrectDirective) }
  ]
})
export class IsIdCorrectDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value && control.value.length > 0 && control.value[0] !== '0')
      return {'id-invalid': 'there is no leading zero'};
    return null;
  }

}
