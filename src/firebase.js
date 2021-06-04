import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDB0trOb6hnkPMkNSzRusiG5YHvfaftppw",
  authDomain: "react-funstagram.firebaseapp.com",
  projectId: "react-funstagram",
  storageBucket: "react-funstagram.appspot.com",
  messagingSenderId: "519371056182",
  appId: "1:519371056182:web:1de29aa7a301a30bf42497",
  measurementId: "G-55QJXQW2S8",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
