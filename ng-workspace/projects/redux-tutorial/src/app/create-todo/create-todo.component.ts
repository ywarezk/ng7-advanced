import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '../redux/state';
import { AddTask } from '../redux/actions';

@Component({
  selector: 'app-create-todo',
  template: `
    <form (ngSubmit)="addTask()">
      <div class="form-group">
        <label>Add New Task:</label>
        <input
          [(ngModel)]="task" 
          type="text" 
          name="task" class="form-control" />
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  `,
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent{
  task = '';

  constructor(private _store : Store<IState>) { }

  /**
   * when user submits the form
   */
  addTask = () => {
    this._store.dispatch(new AddTask(this.task));
  }
}
