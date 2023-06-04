// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.process.env.VITE_apiKey,
  authDomain: import.meta.process.env.VITE_authDomain,
  projectId: import.meta.process.env.VITE_projectId,
  storageBucket: import.meta.process.env.VITE_storageBucket,
  messagingSenderId: import.meta.process.env.VITE_messagingSenderId,
  appId: import.meta.process.env.VITE_appId,


// apiKey : "AIzaSyBdPrGiyxHK3MrpKjkPMik7KVypp8E0YxU",
// authDomain : "assignment-11-client-15991.firebaseapp.com",
// projectId : "assignment-11-client-15991",
// storageBucket : "assignment-11-client-15991.appspot.com",
// messagingSenderId : "516805797809",
// appId : "1:516805797809:web:032a676260d10a95577f9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
