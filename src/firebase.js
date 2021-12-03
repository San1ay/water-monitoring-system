import firebase from "firebase";
import { firebaseConfig } from "./firebaseConfig";
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebase.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export { providers, firebaseAppAuth };
