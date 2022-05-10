// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9fsWRaC8SJF6o7jsRtXaD5ybZljhuF5w",
  authDomain: "werehouse-11.firebaseapp.com",
  projectId: "werehouse-11",
  storageBucket: "werehouse-11.appspot.com",
  messagingSenderId: "107485824785",
  appId: "1:107485824785:web:f9f5915fd6c453ca06aeb0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
