import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAISrPDYzpX4SLrSQ74Iv9dPflm5Ptgfps",
  authDomain: "pubg-819a4.firebaseapp.com",
  projectId: "pubg-819a4",
  storageBucket: "pubg-819a4.appspot.com",
  messagingSenderId: "644716250351",
  appId: "1:644716250351:web:bb7a1bd3560dfe89bd871a",
  measurementId: "G-G1242S735J"
};

firebase.initializeApp(firebaseConfig);