// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVEQrFHfOoIgD6-DtgBt6gM5lsZ-w2eDk",
  authDomain: "auth-provider-tailwind-project.firebaseapp.com",
  projectId: "auth-provider-tailwind-project",
  storageBucket: "auth-provider-tailwind-project.appspot.com",
  messagingSenderId: "1023991762602",
  appId: "1:1023991762602:web:ceccc61fc3c02f18828ad3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
