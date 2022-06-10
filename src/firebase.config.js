// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeinZ__IW0i0CWF8xm4iZ-cHY9oaqbJs4",
  authDomain: "house-marketplace-app-f8a41.firebaseapp.com",
  projectId: "house-marketplace-app-f8a41",
  storageBucket: "house-marketplace-app-f8a41.appspot.com",
  messagingSenderId: "292314690649",
  appId: "1:292314690649:web:8a77306de40782dc3aed48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()