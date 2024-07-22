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
  apiKey: "AIzaSyD_tyIl6M6zTkL1Xgj1-5WAsz89915PLrQ",
  authDomain: "moengage-ba359.firebaseapp.com",
  projectId: "moengage-ba359",
  storageBucket: "moengage-ba359.appspot.com",
  messagingSenderId: "59674484440",
  appId: "1:59674484440:web:cad6b25fb17ba33e4c41ad",
  measurementId: "G-D9PG0R87S6"}
};

// Initialize Firebase
// const app = initializeApp(environment);
const app=AngularFireModule.initializeApp(environment.firebaseConfig);
// const analytics = getAnalytics(app);