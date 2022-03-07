// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYNH3LbIWetcGWCF4Le2qiy8YsBDI4emI",
  authDomain: "maya-hall.firebaseapp.com",
  projectId: "maya-hall",
  storageBucket: "maya-hall.appspot.com",
  messagingSenderId: "249683221663",
  appId: "1:249683221663:web:7410e7d4db7da37c8096aa",
  measurementId: "G-SZJ9713MS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);