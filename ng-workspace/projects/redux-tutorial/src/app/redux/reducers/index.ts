import {ActionReducerMap} from '@ngrx/store';
import { IState } from '../state';
import {todoReducer} from './todo';


export const stateActionReducerMap : ActionReducerMap<IState> = {
    todo : todoReducer
}