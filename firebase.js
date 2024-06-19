// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbEhOAoBLJ_aKGUAqkAUwRxqgA5TScSiM",
  authDomain: "kraye-955d7.firebaseapp.com",
  projectId: "kraye-955d7",
  storageBucket: "kraye-955d7.appspot.com",
  messagingSenderId: "697401758805",
  appId: "1:697401758805:web:b015373067ad0c4691b0dc",
  measurementId: "G-895V65JVL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);