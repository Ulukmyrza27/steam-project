// Import the functions you need from the SDKs you need
import fire from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpNj_K1MNe5eGAJkB5UsCf1VgpwlACd8o",
  authDomain: "steam-project-6c027.firebaseapp.com",
  projectId: "steam-project-6c027",
  storageBucket: "steam-project-6c027.appspot.com",
  messagingSenderId: "157904729013",
  appId: "1:157904729013:web:59b33d8055a4f26a421ffc",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default fire;
// Initialize Firebase
export default fire.initializeApp(firebaseConfig);
