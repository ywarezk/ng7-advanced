/**
 * create interfaces to describe the state and the chunk of the states
 */

 export interface ITodo {
     tasks : string[];
     tasksFromServer : any[]
 }

 export interface IState {
     todo : ITodo;
 }