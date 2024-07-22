import { Routes } from '@angular/router';
import { DogslistComponent } from './dogslist/components/dogslist/dogslist.component';
import { HomeComponent } from './Home/components/home/home.component';
import { LoginComponent } from './login/components/login/login.component';
import { SignupComponent } from './signup/components/signup/signup.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "dogslist", component: DogslistComponent },
  { path: '**', redirectTo: '/home' },
];

