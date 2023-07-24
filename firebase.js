// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUSiuiyvsd16vHWg50XqsmipjkL3s5fdM",
  authDomain: "react-chat-5e511.firebaseapp.com",
  projectId: "react-chat-5e511",
  storageBucket: "react-chat-5e511.appspot.com",
  messagingSenderId: "293846974030",
  appId: "1:293846974030:web:e7a15aa1bbbef672770d1f",
 // measurementId: "G-NEPE3WB8LX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);