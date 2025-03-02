// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCafmYCct1TvlVZ4DEdnaCycUx46njKmZM",
  authDomain: "assignment-num-ten.firebaseapp.com",
  projectId: "assignment-num-ten",
  storageBucket: "assignment-num-ten.firebasestorage.app",
  messagingSenderId: "106695834782",
  appId: "1:106695834782:web:63018b0e10efabffc7cf8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);