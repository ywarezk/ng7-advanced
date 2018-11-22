import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { IState } from './redux/state';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AddTasksFromServer } from './redux/actions';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _http : HttpClient, private _store : Store<IState>) { }

  getTodos = () : Observable<any[]> => {
    return this._http
      .get('https://nztodo.herokuapp.com/api/task/?format=json')
      .pipe(
        tap((json : any[]) => this._store.dispatch(new AddTasksFromServer(json)))
      );
  }
}
