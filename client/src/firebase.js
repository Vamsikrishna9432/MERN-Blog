// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-5a420.firebaseapp.com",
  projectId: "mern-blog-5a420",
  storageBucket: "mern-blog-5a420.appspot.com",
  messagingSenderId: "745655331582",
  appId: "1:745655331582:web:e198ad3329e975844953af"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);