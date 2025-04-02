import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCkIGch6D8bQTjXXD-KMgd-n6wCKYFJnZU",
  authDomain: "rooms-17181.firebaseapp.com",
  databaseURL: "https://rooms-17181-default-rtdb.firebaseio.com",
  projectId: "rooms-17181",
  storageBucket: "rooms-17181.firebasestorage.app",
  messagingSenderId: "859102685974",
  appId: "1:859102685974:web:3e6236b307dd2d366ebe37",
  measurementId: "G-MQGYB878BD"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, onValue };
