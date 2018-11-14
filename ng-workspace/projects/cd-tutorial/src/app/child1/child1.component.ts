import { Component, OnInit, ChangeDetectionStrategy, Input, DoCheck, KeyValueDiffers, ChangeDetectorRef } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child1',
  template: `
    <p>
      child1 works! {{title}}
    </p>

    {{print()}}

    <app-grand-child1></app-grand-child1>

    <ul>
      <li *ngFor="let task of tasks$ | async">
        {{task.title}}
      </li>
    </ul>
  `,
  styleUrls: ['./child1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child1Component implements OnInit, DoCheck {
  @Input() obj : {[key: string]: string}
  title = 'hello world'
  tasks$ : Observable<any>;

  constructor(private _differ: KeyValueDiffers, private _cd: ChangeDetectorRef, private _http: HttpClient) { }

  ngOnInit() {
    setTimeout(() => {
      console.log('timer in child1');
      this.title = 'changed';
      // this._cd.detectChanges();
      // this._cd.markForCheck();
    }, 2000)

    this.tasks$ = this._http.get('https://nztodo.herokuapp.com/api/task/?format=json');
  }

  print = () => {
    console.log('render child1');
  }

  ngDoCheck() {
    // this will be called even if onpush will not cause CD

    // define differ on the object obj
    // this will be in on init
    // differ will allow us 
  }

}
