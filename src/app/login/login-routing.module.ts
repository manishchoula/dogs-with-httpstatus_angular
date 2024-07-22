import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from '../services/auth.service';

const routes: Routes = [
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers:[AuthService]
})
export class LoginRoutingModule { }
