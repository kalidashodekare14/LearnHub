// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc7bwl6ZoON8ythYu1ofYk2qNrw7Vr5cA",
  authDomain: "learnhub-1bb01.firebaseapp.com",
  projectId: "learnhub-1bb01",
  storageBucket: "learnhub-1bb01.firebasestorage.app",
  messagingSenderId: "1086760291581",
  appId: "1:1086760291581:web:9992ba6c3243a7587bc294"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth