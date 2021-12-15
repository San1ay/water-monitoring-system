import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./configVariables.js";
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebase.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export { providers, firebaseAppAuth };
