// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuvovSDuro-MAZXEqvUypIL4IJyJGoDnw",
    authDomain: "tutorials-points-a4a41.firebaseapp.com",
    projectId: "tutorials-points-a4a41",
    storageBucket: "tutorials-points-a4a41.appspot.com",
    messagingSenderId: "278589697900",
    appId: "1:278589697900:web:d9b7118219c9ffa29d8d49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;