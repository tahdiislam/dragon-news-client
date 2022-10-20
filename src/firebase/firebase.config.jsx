// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDGPPCv8ZKr_LmgHXwtIBL-KP7PoNoBPg",
    authDomain: "dragon-news-ccbf0.firebaseapp.com",
    projectId: "dragon-news-ccbf0",
    storageBucket: "dragon-news-ccbf0.appspot.com",
    messagingSenderId: "1004431095094",
    appId: "1:1004431095094:web:f1aadd25d5cfda81bd2f97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;