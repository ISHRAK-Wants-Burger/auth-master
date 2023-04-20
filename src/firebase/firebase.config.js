// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKMFB88gu7zf2hQDTKmK_DV0Xwt3tHp_I",
  authDomain: "auth-firebase-context-ta-d37ef.firebaseapp.com",
  projectId: "auth-firebase-context-ta-d37ef",
  storageBucket: "auth-firebase-context-ta-d37ef.appspot.com",
  messagingSenderId: "923400365409",
  appId: "1:923400365409:web:08b9a702a75c25dacd5120"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;