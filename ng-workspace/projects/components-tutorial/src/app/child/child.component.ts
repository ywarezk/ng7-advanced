import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  @Input('message') public stamMessage: string;
  @Input() public msgObj: any;
  // @Input() public message: string;

  ngOnInit() {
    console.log('In this lifecycle hook Im gurenteed that the input properties are populated');
  }

  constructor() { }

}
