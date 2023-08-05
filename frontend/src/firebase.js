// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//methords
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqqB1GRyHu1pGiyJCqE80z_oh0t2VhPcQ",
  authDomain: "askall-1b374.firebaseapp.com",
  projectId: "askall-1b374",
  storageBucket: "askall-1b374.appspot.com",
  messagingSenderId: "286771647492",
  appId: "1:286771647492:web:abd20d96fc39e1ab881151",
  measurementId: "G-YVBLR26579"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };