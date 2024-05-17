import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from '../../../store/basic-example/counter.actions';
import { countSelector, doubleSelectorNGRX } from '../../../store/basic-example/counter.selector';

@Component({
  selector: 'app-basic-state-example',
  templateUrl: './basic-state-example.component.html',
  styleUrl: './basic-state-example.component.scss'
})
export class BasicStateExampleComponent {

  counter$!: Observable<number>;
  doubleSelector$!: Observable<number>;

  counterBySelector$! : Observable<number>;
  constructor(private store: Store<{ counterExmple: number }>) {
    this.counter$ = store.select('counterExmple');

    //TODO select selector
    this.counterBySelector$ = store.select(countSelector);

    this.doubleSelector$ = store.select(doubleSelectorNGRX)
  }

  increment() {
    //dispatch the action here
    this.store.dispatch(increment({value : 5}));
    //this.counter++;
  }

  decrement() {
    this.store.dispatch(decrement({value : 5}))
    // this.counter--;
  }
}
