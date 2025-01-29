import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDVrMJFZ9LJP6AOt4eIs0hZRadKUDzFG00",
  authDomain: "printapp-notifications.firebaseapp.com",
  projectId: "printapp-notifications",
  storageBucket: "printapp-notifications.appspot.com",
  messagingSenderId: "670022023033",
  appId: "1:670022023033:web:fecfdfb5c6f4afb746a1a8",
  measurementId: "G-4EY2XHB1GG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Setup Firebase Authentication
const auth = getAuth(app);

// Setup Firestore
const db = getFirestore(app); // Initialize Firestore

// Setup reCAPTCHA verifier for OTP
const setupRecaptcha = (containerId) => {
  return new RecaptchaVerifier(
    containerId,
    {
      size: "invisible", // Use 'invisible' for seamless reCAPTCHA or 'normal' for visible
      callback: (response) => {
        console.log("reCAPTCHA verified:", response);
      },
    },
    auth
  );
};

// Firebase Messaging for Notifications
const messaging = getMessaging(app);

// Request Notification Permissions
const requestNotificationPermission = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: "BNvTVJUjpYWReSJr8Euqz6Byjl7fUb2nUN-vVv9nrQzBD8cax1rRBjL7fCdLyTVthysAUTKrewMKqO8FB42-70U", // Replace with your VAPID key from Firebase settings
    });
    if (token) {
      console.log("FCM Token:", token);
      // Send this token to your server to save for sending notifications
    } else {
      console.log("No registration token available. Request permission to generate one.");
    }
  } catch (error) {
    console.error("An error occurred while retrieving token:", error);
  }
};

// Handle Incoming Messages
onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // Customize notification display here
});

export {
  app,
  auth,
  db, // Export Firestore instance
  messaging,
  setupRecaptcha,
  signInWithPhoneNumber,
  requestNotificationPermission,
  onMessage,
};
