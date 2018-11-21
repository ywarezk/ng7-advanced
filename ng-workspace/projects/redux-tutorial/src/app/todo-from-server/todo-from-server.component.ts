import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IState } from '../redux/state';

@Component({
  selector: 'app-todo-from-server',
  template: `
    <ul>
      <li *ngFor="let task of tasksFromServer$ | async">
        {{task.title}}
      </li>
    </ul>
  `,
  styleUrls: ['./todo-from-server.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFromServerComponent implements OnInit {
  tasksFromServer$ : Observable<any[]>

  constructor(
    private _todoService : TodoService,
    store : Store<IState>
  ) { 
    this.tasksFromServer$ = store.pipe(
      select('todo', 'tasksFromServer')
    )
  }

  ngOnInit() {
    this._todoService.getTodos().subscribe();
  }

}
