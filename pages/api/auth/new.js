import _ from "lodash";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default async function handler(req, res) {
  var user = req.query;

  console.log(user);

  try {
    const app = initializeApp({
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FRIEBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      appId: process.env.FRIEBASE_APP_ID,
      messagingSenderId: "567489105193",
      measurementId: "G-7SEBXTSN8W",
    });

    const database = getDatabase(app);
    const auth = getAuth(app);
    var result;

    await createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Set the UID
        user.uid = userCredential.user.uid;
        user.isLoggedIn = true;
        // Then we write the info to the realtime database
        set(ref(database, "users/" + user.uid), user);

        // If student, create student profile
        if (user.role === "STUDENT" || "Student") {
          set(ref(database, "students/" + user.uid), user);
        }

        res.status(200).json(user);
      })
      .catch((error) => {
        console.log(error);
        res.status(200).json(error);
      });
  } catch (err) {
    console.log(err);
  }
}
