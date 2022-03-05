import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase/compat"
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyCrebO_HtEsXckCxxCiYeIA2dtY7DrAk_I",
    authDomain: "chat-react-b34ea.firebaseapp.com",
    projectId: "chat-react-b34ea",
    storageBucket: "chat-react-b34ea.appspot.com",
    messagingSenderId: "198742018191",
    appId: "1:198742018191:web:3d003e986a70bf1d3108fa",
    measurementId: "G-MLTGX6PG3P"
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider value={{
      firebase,
      auth,
      firestore
  }}>
      <App />
  </Context.Provider>,
  document.getElementById('root')
);
