import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage'


const firebaseConfig = {
  apiKey: "AIzaSyB9Zl-r-Rp66yxgmZB6liHfgxZ61kIPr58",
  authDomain: "servicebook-25132.firebaseapp.com",
  projectId: "servicebook-25132",
  storageBucket: "servicebook-25132.appspot.com",
  messagingSenderId: "588388496237",
  appId: "1:588388496237:web:33403e521f66852aaa2064",
  measurementId: "G-C53R8L13R6"
};
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();
  
  
  export default firebase;