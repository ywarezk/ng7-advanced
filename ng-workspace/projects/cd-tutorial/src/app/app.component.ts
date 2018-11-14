import { Component, NgZone, OnInit } from '@angular/core';
import {Map} from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cd-tutorial';
  // transferToChild = Map({message: 'hello world'})
  transferToChild = {message: 'hello world'}

  constructor(private _zone : NgZone) {

  }

  print = () => {
    console.log('render app component');
  }

  ngOnInit() {
    // this._zone.runOutsideAngular(() => {
    //   setInterval(() => {
    //     console.log('will not activate CD')
    //   }, 10)
    // })
    // setInterval(() => {
    //   console.log('this will make angular execute CD')
    // }, 10)

    setTimeout(() => {
      console.log('timer in app component');
      // this.transferToChild = {message: 'new message'}; // when change @Input in OnPush will cause CD
      // this.transferToChild['message'] = 'new message';

      // this.transferToChild = this.transferToChild.set('message', 'new message');

      // this.transferToChild = {...this.transferToChild, message: 'new message'};
    }, 1000)
  }
}
