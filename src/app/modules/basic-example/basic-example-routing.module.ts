import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicStateExampleComponent } from './basic-state-example/basic-state-example.component';

const routes: Routes = [
  {
    path : '', 
    component : BasicStateExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicExampleRoutingModule { }
