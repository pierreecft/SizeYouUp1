// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyd7yzJ2oDPZiFR_8NM03X6uiGRlYtcRI",
  authDomain: "sizeyouup-e1b0a.firebaseapp.com",
  projectId: "sizeyouup-e1b0a",
  storageBucket: "sizeyouup-e1b0a.appspot.com",
  messagingSenderId: "751237397707",
  appId: "1:751237397707:web:c3a2738f7f213e7eee6f4e",
  measurementId: "G-PRX4K9WSR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);