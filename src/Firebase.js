// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBbjWGRz3iUKWQR-gmOKS1XwsSZIt2XV4w',
  authDomain: 'secret-santa-96600.firebaseapp.com',
  projectId: 'secret-santa-96600',
  storageBucket: 'secret-santa-96600.appspot.com',
  messagingSenderId: '262663248423',
  appId: '1:262663248423:web:97843da890f67d75da8c02',
  measurementId: 'G-YK9X9H7CQV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
