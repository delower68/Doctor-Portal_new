// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYOzZF4uCsEnqcQR0iaEg4wBh6RaqnsUM",
  authDomain: "doctor-portal-7fbba.firebaseapp.com",
  projectId: "doctor-portal-7fbba",
  storageBucket: "doctor-portal-7fbba.appspot.com",
  messagingSenderId: "288970147439",
  appId: "1:288970147439:web:fbd9cf4d2945ea32b9ef9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;