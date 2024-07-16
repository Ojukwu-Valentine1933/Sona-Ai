// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu7zc6speobCCzY5QZDzdv-dDERe6nPiI",
  authDomain: "voice-chat-ai-5927a.firebaseapp.com",
  projectId: "voice-chat-ai-5927a",
  storageBucket: "voice-chat-ai-5927a.appspot.com",
  messagingSenderId: "196810406520",
  appId: "1:196810406520:web:aeecc9b46e480780248b8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;

