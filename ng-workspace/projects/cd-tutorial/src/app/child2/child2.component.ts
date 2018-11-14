import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
    <p>
      child2 works!
    </p>
    {{print()}}

    <app-grand-child2></app-grand-child2>
  `,
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  print = () => {
    console.log('render child2');
  }

}
