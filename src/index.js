import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Index.css'
import { FirebaseContex } from './Store/FirebaseContext'
import firebase from './FireBase/Config'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirebaseContex.Provider value={{firebase}}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </FirebaseContex.Provider>
);
