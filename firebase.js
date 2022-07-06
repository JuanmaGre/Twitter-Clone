import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCXzA2n-c320EWizCw55F3D72edT88Tf3E",
    authDomain: "my-twitter-clone-10ed6.firebaseapp.com",
    projectId: "my-twitter-clone-10ed6",
    storageBucket: "my-twitter-clone-10ed6.appspot.com",
    messagingSenderId: "651780055150",
    appId: "1:651780055150:web:c8484c499dbf607047467f"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();



export default app;
export { db, storage };