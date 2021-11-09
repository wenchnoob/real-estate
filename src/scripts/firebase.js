// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVW0FCjtnDjm5bVvGtLcLu3gGbwZ96P0E",
  authDomain: "real-estate-pg.firebaseapp.com",
  databaseURL: "https://real-estate-pg-default-rtdb.firebaseio.com",
  projectId: "real-estate-pg",
  storageBucket: "real-estate-pg.appspot.com",
  messagingSenderId: "630835040616",
  appId: "1:630835040616:web:9be6ff139ff76c5efa46dd",
  measurementId: "G-0H1ZM7Q16Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
