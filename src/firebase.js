// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAvyApIBwMLQlXqR6TiG9470E6AANzZKeY",

  authDomain: "wheres-wally-d4370.firebaseapp.com",

  projectId: "wheres-wally-d4370",

  storageBucket: "wheres-wally-d4370.appspot.com",

  messagingSenderId: "50954629796",

  appId: "1:50954629796:web:a00db96259c8579b70ec31"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
export const auth = getAuth()