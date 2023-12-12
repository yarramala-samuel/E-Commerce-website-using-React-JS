import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = 
{
    apiKey: "AIzaSyDLG_XClAn-Um9zj0TvcMFLebxoFLrj8Xs",
    authDomain: "portfolio-contact-72033.firebaseapp.com",
    projectId: "portfolio-contact-72033",
    storageBucket: "portfolio-contact-72033.appspot.com",
    messagingSenderId: "137575277835",
    appId: "1:137575277835:web:59e1eaac5593fc45256e0e"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();