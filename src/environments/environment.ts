// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AngularFireModule } from "@angular/fire/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
  production:false,
 firebaseConfig :{
 //configurations shared by firebase
};

// Initialize Firebase
// const app = initializeApp(environment);
const app=AngularFireModule.initializeApp(environment.firebaseConfig);
// const analytics = getAnalytics(app);
