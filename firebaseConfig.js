import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB9ozLpxphiUK8EjbImNUOaBR1AgXxgR0Q",
    authDomain: "profskill-40a23.firebaseapp.com",
    projectId: "profskill-40a23",
    storageBucket: "profskill-40a23.appspot.com",
    messagingSenderId: "74189974827",
    appId: "1:74189974827:web:8beae465301e37105e296e",
    measurementId: "G-7RVLNHDL7X",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
