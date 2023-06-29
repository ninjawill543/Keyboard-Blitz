// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import Constants from 'expo-constants';



// const firebaseConfig = {
//   apiKey: Constants.manifest?.extra?.firebaseApiKey,
//   authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
//   projectId: Constants.manifest?.extra?.firebaseProjectId,
//   storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
//   messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
//   appId: Constants.manifest?.extra?.firebaseAppId,
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);