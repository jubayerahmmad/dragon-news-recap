// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeE0LrRrnj0EJtq5Iwnp9gx55bHIAECRs",
  authDomain: "react-auth-private-route-21ca0.firebaseapp.com",
  projectId: "react-auth-private-route-21ca0",
  storageBucket: "react-auth-private-route-21ca0.firebasestorage.app",
  messagingSenderId: "15921923706",
  appId: "1:15921923706:web:be8c0d54c615e3c7035dc3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
