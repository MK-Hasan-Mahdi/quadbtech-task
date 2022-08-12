// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdZxegblON2_bZ7QxuW9N5SBQlz5aso4g",
    authDomain: "quadbtech-task.firebaseapp.com",
    projectId: "quadbtech-task",
    storageBucket: "quadbtech-task.appspot.com",
    messagingSenderId: "1001531058227",
    appId: "1:1001531058227:web:aa86535316b515dd11db46"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;