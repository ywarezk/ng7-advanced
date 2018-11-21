import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IState } from '../redux/state';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor="let item of tasks$ | async">
        {{item}}
      </li>
    </ul>
  `,
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  tasks$ : Observable<string[]>;

  constructor(store : Store<IState>) {
    this.tasks$ = store.pipe(
      select('todo', 'tasks')
    )
  }
}
