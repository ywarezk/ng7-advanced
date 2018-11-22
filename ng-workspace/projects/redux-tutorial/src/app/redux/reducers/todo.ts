/**
 * Reducer that will be in charge on tasks array
 */

import {ActionReducer, Action} from '@ngrx/store';
import { ITodo } from '../state';
import {AddTask, AddTasksFromServer} from '../actions';

const initialState : ITodo = {
    tasks: [],
    tasksFromServer: []
}

export const todoReducer : ActionReducer<ITodo> = (state: ITodo = initialState, action : Action) : ITodo => {
    switch(action.type) {
        case AddTask.NAME:
            const newTasks : string[] = [...state.tasks];
            newTasks.push((<AddTask>action).payload);
            return {
                ...state,
                tasks: newTasks
            }
        case AddTasksFromServer.NAME:
            return {
                ...state, 
                tasksFromServer: (<AddTasksFromServer>action).payload
            }
        default: 
            return state;
    }
}