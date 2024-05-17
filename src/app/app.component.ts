import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { init } from './store/basic-example/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit {
  constructor(private store : Store) { }
  ngOnInit(): void {
   // this.store.dispatch(init())
  }
  title = 'state';
}
