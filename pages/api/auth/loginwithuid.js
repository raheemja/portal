// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import _ from "lodash";
import { getDatabase, child, ref, get } from "firebase/database";

let result = {};

async function handler(req, res) {
  const { email, password } = req.query;

  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FRIEBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();
  let user;

  const dbRef = ref(getDatabase());

  await get(child(dbRef, `users/${req.query.uid}`)).then((snapshot) => {
    if (snapshot.exists()) {
      user = snapshot.val();
      user.isLoggedIn = true;

      res.status(200).json(_.omit(user, "password"));
    } else {
      res.status(200).json({ message: "Internal server error" });
    }
  });
}

export default handler;
