import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBcPmZNcfIBR2EaU1ugvb97jHRlTzTHKYk",
  authDomain: "dbsomeel.firebaseapp.com",
  projectId: "dbsomeel",
  storageBucket: "dbsomeel.firebasestorage.app",
  messagingSenderId: "207669212268",
  appId: "1:207669212268:web:b6a117bf831da6687cd449",
  measurementId: "G-8HJS8RCZZJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);