import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-matrix',
  template: `
    <p>
      matrix works! {{id}} {{msg}}
      {{(_activatedRoute.paramMap | async).get('msg')}}
    </p>
  `,
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit, OnDestroy {
  public id: string;
  public msg: string;
  private _sub: Subscription

  constructor(public _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._sub = this._activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.msg = paramMap.get('msg');
    })
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

}
