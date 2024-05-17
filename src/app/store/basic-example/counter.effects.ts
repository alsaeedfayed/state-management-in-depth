import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment, init, set } from "./counter.actions";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { countSelector } from "./counter.selector";
import { counterReducer } from './counter.reducer';

@Injectable()
export class coutnerEffects {

    constructor(private actions$: Actions, private store: Store<{ counterExmple: number }>) { }

    saveEffect = createEffect(
        () => this.actions$.pipe(
            //oftype takes the actions that i want to do something if there is update on them
            ofType(increment, decrement),
            //TODO i want to get the latest updated data
            withLatestFrom(this.store.select(countSelector)),
            //tap doesn't emit a new value after the actoin is done.
            tap(([action, counter]) => {
                console.log(action);
                console.log('latest update', counter)
                localStorage.setItem('count', counter.toString())
            })
        ),
        { dispatch: false }
    );


    //TODO adding another effect that trigger another action.
    loadEffect = createEffect(
        () => this.actions$.pipe(
            ofType(init),
            switchMap(() => {
                const storedCounter = localStorage.getItem('count');
                console.log('stored value' , storedCounter)

                if (storedCounter) {
                    return of(set({ value: +storedCounter })); //of because switchMap must return observable
                }
                return of(set({ value: 0 }));
            })
        )
    )

}