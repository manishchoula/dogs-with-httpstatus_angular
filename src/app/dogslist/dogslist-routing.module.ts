import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogslistComponent } from './components/dogslist/dogslist.component';

const routes: Routes = [
  {path:'',component:DogslistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogslistRoutingModule { }
