import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage'



const firebaseConfig = {
    apiKey: "AIzaSyASZ9jN5kP4cfOwoi3aoy7sxj4f2Ffdkig",
    authDomain: "yashaservicebook.firebaseapp.com",
    projectId: "yashaservicebook",
    storageBucket: "yashaservicebook.appspot.com",
    messagingSenderId: "1030708385488",
    appId: "1:1030708385488:web:0f1b9bf2bec8a2d4b6b0d5",
    measurementId: "G-GLF15WPKZ7"
  };
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();
  
  
  export default firebase;