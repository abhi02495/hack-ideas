
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkKs8_vwCTuQTJsvTiHemAJhUjPYRYlrg",
  authDomain: "react-project-5cbf8.firebaseapp.com",
  databaseURL: "https://react-project-5cbf8-default-rtdb.firebaseio.com",
  projectId: "react-project-5cbf8",
  storageBucket: "react-project-5cbf8.appspot.com",
  messagingSenderId: "702890877275",
  appId: "1:702890877275:web:23f86b6f89e4e7773fba7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;