import { Routes } from '@angular/router';
import { LoginComponent } from './login/components/login/login.component';
import { SignupComponent } from './signup/components/signup/signup.component';
import { DogslistComponent } from './dogslist/components/dogslist/dogslist.component';
import { HomeComponent } from './Home/components/home/home.component';

export const routes: Routes = [
  // {path:'',redirectTo:'[HomeComponent]',pathMatch:"prefix"},
  {path:'home',component:HomeComponent},
  { path: 'login', component: LoginComponent },
  {path:"signup",component:SignupComponent},
  {path:"dogslist",component:DogslistComponent},
  { path: '**', redirectTo: '/home' },
    // {path:'signup',component:}
];

