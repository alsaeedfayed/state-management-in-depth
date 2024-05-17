import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { counterReducer } from './store/basic-example/counter.reducer';
import { coutnerEffects } from './store/basic-example/counter.effects';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      //TODO provide your reducers here
      counterExmple : counterReducer
      //TODO in case need auth for the user
      // auth : authReducer
    }),
   EffectsModule.forRoot([coutnerEffects])
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
