import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASgvFYJu9pAsmsJ4YD9Y0V-WKLFK7-o8M",
  authDomain: "keyboard-blitz.firebaseapp.com",
  projectId: "keyboard-blitz",
  storageBucket: "keyboard-blitz.appspot.com",
  messagingSenderId: "571693548138",
  appId: "1:571693548138:web:daea15a229b72a48828013",
  measurementId: "G-8B9GRLD9N5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
