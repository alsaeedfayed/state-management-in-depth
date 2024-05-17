import { Action, createAction, props } from "@ngrx/store";

export const increment = createAction(
    //it takes type and value as params
    '[Counter] Increment', //type
    //send props with the action
    props<{ value: number }>() // value from outside
)

export const decrement = createAction(
    '[Counter] Decrement',
    props<{ value: number }>());

//TODO acttions to 
export const init = createAction(
    'Counter Init' //this is the identifier.
)

export const set = createAction(
    'Counter Set', 
    props<{ value: number }>()
)

//TODO WRITING ACTION FUNCTION
export const INCREMENT = '[COUNTER] Increment'
export class IncrementAction implements Action {
    readonly type = INCREMENT;
    constructor(public value: number) { }
}