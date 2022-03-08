import firebase from 'firebase/app';
import 'firebase/firestore';



const firebaseApp =  firebase.initializeApp( {
  apiKey: "AIzaSyBYNH3LbIWetcGWCF4Le2qiy8YsBDI4emI",
  authDomain: "maya-hall.firebaseapp.com",
  projectId: "maya-hall",
  storageBucket: "maya-hall.appspot.com",
  messagingSenderId: "249683221663",
  appId: "1:249683221663:web:7410e7d4db7da37c8096aa",
  measurementId: "G-SZJ9713MS8"
});


const db = firebaseApp.firestore();

export { db };
