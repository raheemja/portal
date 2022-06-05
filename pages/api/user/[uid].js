import _ from "lodash";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, child, get } from "firebase/database";
import { initializeApp } from "firebase/app";

export default async function handler(req, res) {
  const { uid } = req.query;

  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FRIEBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  };

  const app = initializeApp(firebaseConfig);

  await get(child(ref(getDatabase()), `users/${uid}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        res.status(200).json(_.omit(snapshot.val(), "password"));
      } else {
        res.status(200).json({
          error: {
            code: `app/user-not-found ${uid}`,
          },
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
