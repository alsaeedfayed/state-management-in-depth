import { createSelector } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
export const countSelector = (state : { counterExmple : number}) => state.counterExmple;

//TODO we can do many selectors as needed

//native 
export const doubleSelectorNative = (state : { counterExmple : number}) => state.counterExmple *2 ;

//using ngrx built in create selector
export const doubleSelectorNGRX = createSelector(
    countSelector,
    (state) => state * 2
)