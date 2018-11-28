import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { map, mergeMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  template: `
    <form>
      <input type="text" name="search" (input)="search($event)" [value]="(queryParams$ | async).get('q')" />
    </form>


    <ul>
      <li *ngFor="let task of tasks$ | async">
        {{task.title}}
      </li>
    </ul>
  `,
  styleUrls: ['./search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  queryParams: string;
  // private _sub: Subscription
  public tasks$: Observable<any>;
  public queryParams$: Observable<ParamMap>;

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private _httpClient: HttpClient) { }

  ngOnInit() {
    // this._sub = this._activatedRoute.queryParamMap.subscribe((queryParamMap: ParamMap) => {
    //   this.queryParams = queryParamMap.get('q');
    // })

    this.queryParams$ = this._activatedRoute.queryParamMap;

    this.tasks$ = this._activatedRoute.queryParamMap.pipe(
      map((queryParamMap: ParamMap) => queryParamMap.get('q')),
      debounceTime(1000),
      distinctUntilChanged(),
      mergeMap((q: string) => this._httpClient.get(`https://nztodo.herokuapp.com/api/task/?search=${q}`))
    );
  }

  search = (event) => {
    const text = event.target.value;
    this._router.navigateByUrl(`/search?q=${text}`);
  }

  // ngOnDestroy() {
  //   console.log('ngOnDestroy search');
  //   this._sub.unsubscribe();
  // }

}
