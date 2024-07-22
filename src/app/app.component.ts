import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { LoginComponent } from "./login/components/login/login.component";


import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent,RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
  providers:[AuthService,]
})
export class AppComponent {
  title = 'moengage';
}
