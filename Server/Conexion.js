import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWnZoOAZN0xuE01LDhSUiRfO7FM7dWZbY",
  authDomain: "aldeberantcg.firebaseapp.com",
  projectId: "aldeberantcg",
  storageBucket: "aldeberantcg.appspot.com",
  messagingSenderId: "841882645248",
  appId: "1:841882645248:web:c03f90dbada5f24c8a39e5"
};

// Initialize Firebase
export const appfb = initializeApp(firebaseConfig);
export const db = getFirestore(appfb);