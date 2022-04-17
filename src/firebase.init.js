// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBImxiT32gOl24bAwtOPMiatA-IrV58x40",
  authDomain: "your-s-photographay.firebaseapp.com",
  projectId: "your-s-photographay",
  storageBucket: "your-s-photographay.appspot.com",
  messagingSenderId: "420331763642",
  appId: "1:420331763642:web:b046a049c7625e276c0f83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);
export default auth;