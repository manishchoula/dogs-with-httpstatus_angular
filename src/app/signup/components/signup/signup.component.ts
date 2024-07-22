import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder,private authService:AuthService,private router:Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const { email, password } = this.signupForm.value;
      this.authService.registerWithEmailAndPassword({ email, password})
        .then(response => {
          console.log('User created successfully!', response.user);
          alert('User created successfully!');
          // this.toatserService.showSuccess("Successfully loged in");
          // setTimeout(()=>this.router.navigate(['/login']),2000)
          this.router.navigate(['/login']);
        })
        .catch(error => {
          console.error('Signup error:', error);
        });
    } else {
      console.log('Form is invalid');
    }
  
  }
}
