// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZFKvCVyIiEnCYl06UMg8PKAUdgAfJ1QQ",
  authDomain: "netflix-gpt-react.firebaseapp.com",
  projectId: "netflix-gpt-react",
  storageBucket: "netflix-gpt-react.appspot.com",
  messagingSenderId: "753526620958",
  appId: "1:753526620958:web:65c3b93540e539d6bd7f0f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
