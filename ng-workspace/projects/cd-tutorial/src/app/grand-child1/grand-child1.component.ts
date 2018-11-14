import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand-child1',
  template: `
    <p>
      grand-child1 works!
    </p>

    {{print()}}

    <button (click)="title='hello'">click grandchild1</button>
  `,
  styleUrls: ['./grand-child1.component.css']
})
export class GrandChild1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  print = () => {
    console.log('render grandchild1');
  }

}
