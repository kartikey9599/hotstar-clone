import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDi6csEyjzaNQVI9g5ySqBaxVPq0s2BiI",
  authDomain: "disneyplus-clone-e0d6c.firebaseapp.com",
  projectId: "disneyplus-clone-e0d6c",
  storageBucket: "disneyplus-clone-e0d6c.appspot.com",
  messagingSenderId: "962848737636",
  appId: "1:962848737636:web:c86cf8b2046ac228e3d271",
};

// Initialize Firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Firebase services using the compat version
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
