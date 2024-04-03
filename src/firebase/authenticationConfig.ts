import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAfqmtq9AoKpfUXbcxNX-ex3bV67_Jc0o0",
    authDomain: "audiophile-9598d.firebaseapp.com",
    projectId: "audiophile-9598d",
    storageBucket: "audiophile-9598d.appspot.com",
    messagingSenderId: "247505346275",
    appId: "1:247505346275:web:730eff9ec418a67b41efd6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)