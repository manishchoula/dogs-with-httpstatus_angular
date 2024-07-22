import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from '../../environments/environment';


@NgModule({
  declarations: [],
  providers:[AuthService],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,RouterModule,LoginComponent
  ],
  
  
})
export class LoginModule { }
