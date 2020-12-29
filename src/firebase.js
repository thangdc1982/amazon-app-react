import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAkhxJV7zM6BEjwS0IcEr0xIDmT_mSF1c",
  authDomain: "cloned-react.firebaseapp.com",
  projectId: "cloned-react",
  storageBucket: "cloned-react.appspot.com",
  messagingSenderId: "746722584318",
  appId: "1:746722584318:web:1300d42037498cfabbe7af",
  measurementId: "G-KYH3TJMEC7"
};

// Initial the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initial database (firestore)
const db = firebaseApp.firestore();

// Initial authentication
const auth = firebase.auth();

// Export
export { db, auth };
