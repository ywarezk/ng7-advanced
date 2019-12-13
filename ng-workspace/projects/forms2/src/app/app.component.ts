import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms2';
  @ViewChild('noModel', {read: NgForm})
  private _myForm : NgForm;
  
  friendsForm : FormGroup = this._builder.group({
    friends : this._builder.array([
      this._builder.group({
        firstName: '',
        lastName: ''
      }),
      this._builder.group({
        firstName: '',
        lastName: ''
      })
    ])
  }) 

  constructor(private _builder : FormBuilder) {}

  add = () => {
    const temp = this._myForm;
    debugger;
    (this.friendsForm.controls.friends as FormArray).push(
      this._builder.group({
        firstName: '',
        lastName: ''
      })
    );
  }
}
