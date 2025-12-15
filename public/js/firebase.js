// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Mee Firebase Config (Firebase console lo untadhi)
const firebaseConfig = {
  apiKey: "AIzaSyAb7lILQF-Cd27aKmRJ2mOoEUtiMsYgcww",
  authDomain: "msmart-2ce7c.firebaseapp.com",
  projectId: "msmart-2ce7c",
  storageBucket: "msmart-2ce7c.firebasestorage.app",
  messagingSenderId: "844751147092",
  appId: "1:844751147092:web:89ed978077d83622765dc1",
  measurementId: "G-HXH0HPHE0W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
