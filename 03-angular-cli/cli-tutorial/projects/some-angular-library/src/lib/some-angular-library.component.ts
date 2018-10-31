import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-some-angular-library',
  template: `
    <p>
      some-angular-library works!
    </p>
  `,
  styles: []
})
export class SomeAngularLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
