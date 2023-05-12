// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB7BTd0p76ImoucnWSyH2Fpt5iLOHf9mKc",
  authDomain: "rubxn-portfolio.firebaseapp.com",
  projectId: "rubxn-portfolio",
  storageBucket: "rubxn-portfolio.appspot.com",
  messagingSenderId: "768556313383",
  appId: "1:768556313383:web:72daf23adaedc55001d702"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);