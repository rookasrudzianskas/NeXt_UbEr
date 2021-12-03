
import {initializeApp} from 'firebase/app';
import firebase from "firebase/compat";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAURCaelDgrCgH5_3yR-9u3_rczxcVA43w",
    authDomain: "rookas-uber.firebaseapp.com",
    projectId: "rookas-uber",
    storageBucket: "rookas-uber.appspot.com",
    messagingSenderId: "313088053682",
    appId: "1:313088053682:web:dea53f64cd95ddf0b5d4ab",
    measurementId: "G-MP321C5LCW"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebase.firestore();
const auth = firebase.auth();


export {firebase, db, auth};

