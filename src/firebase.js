// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCly1L7QHzkBk092HO7CcBo1A055IbQA2M",
  authDomain: "novaformulastudent.firebaseapp.com",
  databaseURL: "https://novaformulastudent-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "novaformulastudent",
  storageBucket: "novaformulastudent.appspot.com",
  messagingSenderId: "414396531013",
  appId: "1:414396531013:web:cd6c4f595db49fca613e2c",
  measurementId: "G-695F3VP62Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);               // Firebase Auth
const provider = new GoogleAuthProvider(); // Google Auth Provider
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, provider, signInWithPopup, db, storage };