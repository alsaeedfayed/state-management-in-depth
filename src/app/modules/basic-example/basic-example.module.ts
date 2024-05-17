import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicExampleRoutingModule } from './basic-example-routing.module';
import { BasicStateExampleComponent } from './basic-state-example/basic-state-example.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../../store/basic-example/counter.reducer';


@NgModule({
  declarations: [
    BasicStateExampleComponent
  ],
  imports: [
    CommonModule,
    BasicExampleRoutingModule,
    //provide the store module
    StoreModule.forRoot({
      //provide your reducers here
      counterExmple : counterReducer
      //TODO in case need auth for the user
      // auth : authReducer
    })
  ]
})
export class BasicExampleModule { }
