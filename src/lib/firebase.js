import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCY0ejqqQqwtq8sIvVxBBx6uvrBwD4mU7Q",
    authDomain: "fir-project-e155d.firebaseapp.com",
    projectId: "fir-project-e155d",
    storageBucket: "fir-project-e155d.firebasestorage.app",
    messagingSenderId: "942533410383",
    appId: "1:942533410383:web:2c5f895f63fb26a164343a",
    measurementId: "G-TGF9BSVJ2H"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storageF = getStorage(app);