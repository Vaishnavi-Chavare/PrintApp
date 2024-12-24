// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyDVrMJFZ9LJP6AOt4eIs0hZRadKUDzFG00",
    authDomain: "printapp-notifications.firebaseapp.com",
    projectId: "printapp-notifications",
    storageBucket: "printapp-notifications.firebasestorage.app",
    messagingSenderId: "670022023033",
    appId: "1:670022023033:web:fecfdfb5c6f4afb746a1a8",
    measurementId: "G-4EY2XHB1GG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Messaging
const messaging = getMessaging(app);

export { app, messaging, getToken, onMessage };