import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAzASsc4NsbbOSr-ePaDgW3QV8XV3MzSnI",
  authDomain: "developers-qoura.firebaseapp.com",
  projectId: "developers-qoura",
  storageBucket: "developers-qoura.appspot.com",
  messagingSenderId: "392781736201",
  appId: "1:392781736201:web:814f3816967e89c1450bd8"
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider,firebaseApp};
// export default db;
