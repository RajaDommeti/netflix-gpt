// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAglBzB1LBz9f9iSEhOeUEBnA5EDKz7Duc",
  authDomain: "netflixgpt-937eb.firebaseapp.com",
  projectId: "netflixgpt-937eb",
  storageBucket: "netflixgpt-937eb.appspot.com",
  messagingSenderId: "1075479381814",
  appId: "1:1075479381814:web:30e95480d1a657ce8b5597",
  measurementId: "G-1VWY9L4LHE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
