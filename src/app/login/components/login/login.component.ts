import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { NgClass, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ForgotPasswordDialogComponent } from '../forgot-password-dialog/forgot-password-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass,ReactiveFormsModule,NgIf,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  // providers:[AuthService],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder,private authSer:AuthService,private router:Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      
      this.authSer.loginWithEmailAndPassword({email,password})
        .then(response => {
          console.log('User logged in successfully!', response.user);
          alert('User logged in successfully!');
          console.log(response);
          this.loginForm.reset();
          this.router.navigate(['/dogslist']);
          
        })
        .catch(error => {
          console.error('Login error:', error);
        });
    } else {
      console.log('Form is invalid');
    }
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  forgotPassword(){
    const dialogRef = this.dialog.open(ForgotPasswordDialogComponent);
    dialogRef.afterClosed().subscribe(email => {
      if (email) {
        console.log('Password reset email sent to:', email);
        // Call your AuthService's forgot password method
        this.authSer.sendPasswordResetEmail(email)
          .then(() => {
            console.log('Password reset email sent successfully.');
            alert('Password reset email sent successfully.');
            
          })
          .catch(error => {
            console.error('Error sending password reset email:', error);
            alert('Error sending password reset email');
          });
      }
    });
  }

  

  routeToSignUp(){
this.router .navigate(['/signup']);
  }
}
