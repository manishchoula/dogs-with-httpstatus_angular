import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth) {
    
  }
  registerWithEmailAndPassword(user : {email:string,password:string  }){
    return this.auth.createUserWithEmailAndPassword(user.email,user.password)
}
 loginWithEmailAndPassword(user : {email:string,password:string  }){
  return this.auth.signInWithEmailAndPassword(user.email,user.password)

}
sendPasswordResetEmail(email:string){
  return this.auth.sendPasswordResetEmail(email);
}

}
