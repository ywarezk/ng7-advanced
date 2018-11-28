import { Directive, forwardRef } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Directive({
  selector: '[ngModel][nerdeez]',
  providers: [
    {provide: NG_ASYNC_VALIDATORS, multi: true, useExisting: forwardRef(() => AsyncValidDirective)}
  ]
})
export class AsyncValidDirective implements AsyncValidator {

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    if (control.value === 'nerdeez') {
      return of({'Nerdeez': 'this string is invalid'}).pipe(
        delay(1000)
      )
    }
    return of(null);
    
  }

}
