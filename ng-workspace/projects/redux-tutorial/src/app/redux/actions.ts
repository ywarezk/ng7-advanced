import {Action} from '@ngrx/store';

export class AddTask implements Action {
    static NAME = '[todoReducer] ADD_TASK';
    type : string = AddTask.NAME;
    constructor(public payload : string) {}
}

export class AddTasksFromServer implements Action {
    static NAME = '[todoReducer] ADD_TASKS_SERVER';
    type : string = AddTasksFromServer.NAME;
    constructor(public payload : any[]) {}
}

