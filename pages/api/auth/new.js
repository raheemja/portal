import _ from "lodash";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FRIEBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
};

export default async function handler(req, res) {
  var user = req.query;

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const database = getDatabase();
  const auth = getAuth();
  var result;

  await createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      // Set the UID
      user.uid = userCredential.user.uid;
      user.isLoggedIn = true;
      // Then we write the info to the realtime database
      set(ref(database, "users/" + user.uid), user);
      set(ref(database, "students/" + user.uid), user);

      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(200).json(error);
    });
}
