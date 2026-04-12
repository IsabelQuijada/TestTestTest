// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOmTycfo1cIzI6IekuX_MltANcrQ7PqUU",
  authDomain: "josenavarropsicologo-e38d0.firebaseapp.com",
  projectId: "josenavarropsicologo-e38d0",
  storageBucket: "josenavarropsicologo-e38d0.firebasestorage.app",
  messagingSenderId: "1092021889610",
  appId: "1:1092021889610:web:f627bd9371b5cd3d6494b3",
  measurementId: "G-BG0ZRJ72WW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);