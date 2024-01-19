// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa-MwH3XnCgdUATIR3sDdogzT5oIF21Ic",
  authDomain: "netflixgpt-cb9ee.firebaseapp.com",
  projectId: "netflixgpt-cb9ee",
  storageBucket: "netflixgpt-cb9ee.appspot.com",
  messagingSenderId: "716604313396",
  appId: "1:716604313396:web:806a6ec6f12a2df345df61",
  measurementId: "G-LHR0WKFL5C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();