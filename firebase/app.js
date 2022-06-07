// All firebase objects
import { getFirestore } from "firebase/firestore";
import { getDatabase, child, get, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";

let app;

try {
  app = initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FRIEBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    appId: process.env.FRIEBASE_APP_ID,
    messagingSenderId: "567489105193",
    measurementId: "G-7SEBXTSN8W",
  });
} catch (e) {
  console.log(e);
}

export default app;
