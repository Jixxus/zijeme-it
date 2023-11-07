import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCb15HvlXJTF99EuSlGUh_NOdKUqN_Bdi8",
    authDomain: "zijeme-it.firebaseapp.com",
    projectId: "zijeme-it",
    storageBucket: "zijeme-it.appspot.com",
    messagingSenderId: "367273193363",
    appId: "1:367273193363:web:93197867a7377a49954266",
    measurementId: "G-9BZW8R59EC",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
