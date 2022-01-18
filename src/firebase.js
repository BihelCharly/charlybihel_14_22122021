// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMfIL5Hg7yaULmya3dHYKs4sJcdaOFHuU",
  authDomain: "ocp14-65291.firebaseapp.com",
  projectId: "ocp14-65291",
  storageBucket: "ocp14-65291.appspot.com",
  messagingSenderId: "977104145774",
  appId: "1:977104145774:web:a6f06f1d79a7f3eef5857f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Database
export const db = getFirestore();
