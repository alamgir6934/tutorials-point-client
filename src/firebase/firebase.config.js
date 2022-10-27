// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);;
export default app;


/*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiWd-urM9GDqBBt6xavZk77bwXNH-d8_o",
  authDomain: "assignment-10-a8d3f.firebaseapp.com",
  projectId: "assignment-10-a8d3f",
  storageBucket: "assignment-10-a8d3f.appspot.com",
  messagingSenderId: "1039149587002",
  appId: "1:1039149587002:web:015918011624693a2cb303"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/