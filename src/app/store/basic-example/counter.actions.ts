import { Action, createAction, props } from "@ngrx/store";

export const increment = createAction(
    '[Counter] Increment',
    //send props with the action
    props<{ value: number }>()
)

export const decrement = createAction(
    '[Counter] Decrement',
    props<{ value: number }>());



//TODO WRITING ACTION FUNCTION
export const INCREMENT = '[COUNTER] Increment'
export class IncrementAction implements Action {
    readonly type = INCREMENT;
    constructor(public value: number) { }
}