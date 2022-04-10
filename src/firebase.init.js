// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEYlzeUO2W4wwrvunH5ingu3KXKWHzawY",
  authDomain: "genius-care-service.firebaseapp.com",
  projectId: "genius-care-service",
  storageBucket: "genius-care-service.appspot.com",
  messagingSenderId: "892394796352",
  appId: "1:892394796352:web:c870706e1a45a2cdbef6a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;