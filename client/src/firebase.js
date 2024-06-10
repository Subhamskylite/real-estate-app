// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-40792.firebaseapp.com",
  projectId: "real-estate-40792",
  storageBucket: "real-estate-40792.appspot.com",
  messagingSenderId: "967721446524",
  appId: "1:967721446524:web:9479513e9e0ffa0e2eadf9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);