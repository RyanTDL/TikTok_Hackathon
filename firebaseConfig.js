// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcZCiqbgnhSmHfeybTLz5ZCFQxfADGRrI",
    authDomain: "tiktok-secret-santa.firebaseapp.com",
    projectId: "tiktok-secret-santa",
    storageBucket: "tiktok-secret-santa.appspot.com",
    messagingSenderId: "249145404166",
    appId: "1:249145404166:web:f4ab1c303b938053e3cc87",
    measurementId: "G-X74LYSSNRK",

};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore services
export const firestore = getFirestore(firebaseApp);