import _ from "lodash";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";

export default async function handler(req, res) {
  var user = req.query;

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
