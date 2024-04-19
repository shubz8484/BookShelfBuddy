// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDueVaUp_q6sgL_EVL3ou4x-aT9NWaKztU",
  authDomain: "mern-book-inventory-1a027.firebaseapp.com",
  projectId: "mern-book-inventory-1a027",
  storageBucket: "mern-book-inventory-1a027.appspot.com",
  messagingSenderId: "61585441764",
  appId: "1:61585441764:web:f41a25bcfff0b8f5613df1",
  measurementId: "G-FFD1MSC7HE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;