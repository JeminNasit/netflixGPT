// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-XTQajzcP7cPORddAx6rx5tv6kVGW7zc",
  authDomain: "netflixgpt-9f069.firebaseapp.com",
  projectId: "netflixgpt-9f069",
  storageBucket: "netflixgpt-9f069.firebasestorage.app",
  messagingSenderId: "899577227233",
  appId: "1:899577227233:web:8a66a9c2be8a1cda8054a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
