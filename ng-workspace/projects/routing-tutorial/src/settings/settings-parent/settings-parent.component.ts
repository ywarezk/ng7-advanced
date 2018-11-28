import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-parent',
  template: `
    <p>
      this is common to all settings children
    </p>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./settings-parent.component.css']
})
export class SettingsParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
