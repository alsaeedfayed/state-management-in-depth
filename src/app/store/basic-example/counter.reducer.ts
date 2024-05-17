import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { decrement, increment, set } from "./counter.actions";
import { state } from "@angular/animations";

//the reducer function is responsible for taking some data and out the updated data
export const counterReducer = createReducer(
    initialState,
    //use on function to write the logic to reducer.
    //TODO if state in no primitive value we must return new value using spread ... 
    on(increment, (state, action) => state += action.value), //action is props; //remember props is a function
    on(decrement, (state, action) => state -= action.value),

    on(set , (state , action)  =>  action.value )
);

// TODO WRITEING REDUCER AS A FUNCTION 
export function conterReducerAnotherWay(state = initialState, action: any): any {
    if (action.type === "[Counter] Increment") {
        return state += action.value;
    }

    return state
}