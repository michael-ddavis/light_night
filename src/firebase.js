// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3-C6vm9_zdnXex4GZc5-RR8tdgn5XUFc",
  authDomain: "light-night-19760.firebaseapp.com",
  projectId: "light-night-19760",
  storageBucket: "light-night-19760.appspot.com",
  messagingSenderId: "185595553365",
  appId: "1:185595553365:web:35ce073a527cca159496dc",
  measurementId: "G-7YBTH3K80V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
