import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand-child2',
  template: `
    <p>
      grand-child2 works!
    </p>
    {{print()}}
  `,
  styleUrls: ['./grand-child2.component.css']
})
export class GrandChild2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      console.log('timer in grandchild2');
    }, 1000)
  }

  print = () => {
    console.log('render grandchild2');
  }

}
