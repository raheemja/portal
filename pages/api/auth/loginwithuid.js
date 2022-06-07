// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import _ from "lodash";
import { getDatabase, child, ref, get } from "firebase/database";

let result = {};

async function handler(req, res) {
  const { email, password } = req.query;

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
