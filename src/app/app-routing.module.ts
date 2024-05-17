import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component : LandingComponent,
    
  },
  {
    path : 'basic-example',
    loadChildren: () => import('./modules/basic-example/basic-example.module').then(m => m.BasicExampleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
