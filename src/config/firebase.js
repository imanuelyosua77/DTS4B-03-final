
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFoqS1Q1Jb7Obys5C9LThA2GQqf-BayBs",
  authDomain: "react-exercise-1cd2d.firebaseapp.com",
  projectId: "react-exercise-1cd2d",
  storageBucket: "react-exercise-1cd2d.appspot.com",
  messagingSenderId: "976496515563",
  appId: "1:976496515563:web:02c3f04807be49dbe721ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app);

export {auth};