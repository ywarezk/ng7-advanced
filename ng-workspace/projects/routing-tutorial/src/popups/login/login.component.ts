import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <form>
      <label>email</label>
      <input type="email" name="email" />
    </form>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
