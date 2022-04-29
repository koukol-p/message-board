import config from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(config);
const projectAuth = getAuth(app);
const projectFirestore = getFirestore(app);

export { projectFirestore, projectAuth };
