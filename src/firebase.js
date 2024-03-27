// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7pHOdSNsQl7vMfCUjeiURMtMcrFCU2z8",
  authDomain: "attendanceapp-e9d55.firebaseapp.com",
  projectId: "attendanceapp-e9d55",
  storageBucket: "attendanceapp-e9d55.appspot.com",
  messagingSenderId: "647194487131",
  appId: "1:647194487131:web:fb48eaa8545042be5a127e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export{auth,db}


