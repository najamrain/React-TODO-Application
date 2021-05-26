// import * as firebase from 'firebase/app';
import firebase from "firebase/app";
import "firebase/database";
var firebaseConfig = {
  apiKey: "AIzaSyCw8agOedkCnJqXm6jalv261-huG4g22TI",
  authDomain: "react-crud-81655.firebaseapp.com",
  databaseURL: "https://react-crud-81655-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-crud-81655",
  storageBucket: "react-crud-81655.appspot.com",
  messagingSenderId: "944219217386",
  appId: "1:944219217386:web:eb6393d4a242a3e1f96693",
  measurementId: "G-HB0SS0S57F"

  };
  // Initialize Firebase
 var fireDb= firebase.initializeApp(firebaseConfig);
 export default fireDb.database().ref();

