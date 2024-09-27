import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDJkAn2KBDfZLJEZmteVhbKIGZj_CtzjfM",
    authDomain: "tekbro-dev.firebaseapp.com",
    projectId: "tekbro-dev",
    storageBucket: "tekbro-dev.appspot.com",
    messagingSenderId: "279108246901",
    appId: "1:279108246901:web:56eef436cf2b4a0925073c",
    measurementId: "G-GN8TYVWVL0"
}


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

const auth = getAuth(app);


export { auth };
export default db;