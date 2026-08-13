// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj3V-A7YEyV40zlt_La4-13qBhOZYiMNk",
  authDomain: "netflixgpt-0926.firebaseapp.com",
  projectId: "netflixgpt-0926",
  storageBucket: "netflixgpt-0926.firebasestorage.app",
  messagingSenderId: "550794920174",
  appId: "1:550794920174:web:188e290f3e5cc57d0933ff",
  measurementId: "G-22CNZPDE8Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
