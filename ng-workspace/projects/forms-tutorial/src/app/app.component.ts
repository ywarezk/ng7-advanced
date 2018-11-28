import { Component } from '@angular/core';
import {FormControl, Validators, ValidatorFn, FormGroup, AbstractControl, FormBuilder} from '@angular/forms';

const matchPasswords: ValidatorFn = (c: FormGroup) => {
  const password = c.controls['password'];
  const confirm = c.controls['confirm'];
  if (password.value !== confirm.value) {
    return {'match': 'the password and confirm dont match'}
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Yariv';
  private _lastName: string = 'Katz';

  nameReactive: FormControl = new FormControl('yariv', [Validators.required, Validators.minLength(3)]);

  passwordForm: FormGroup = new FormGroup({
    password: new FormControl('', Validators.required),
    confirm: new FormControl('', Validators.required)
  }, [matchPasswords]);

  get lastName() {
    return this._lastName;
  }

  set lastName(val: string) {
    this._lastName = val;

    // do additional stuff relating to the change of the input
    console.log('setter');
  }

  constructor(private _fb: FormBuilder) {}
}
