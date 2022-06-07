// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import _ from "lodash";
import { getDatabase, child, ref, get } from "firebase/database";

let result = {};

function handler(req, res) {
  console.log("API called");

  const { email, password } = req.query;

  const auth = getAuth();
  let user;

  try {
    signInWithEmailAndPassword(auth, _.toLower(email), password)
      .then((userCredential) => {
        const dbRef = ref(getDatabase());

        get(child(dbRef, `users/${userCredential.user.uid}`)).then(
          (snapshot) => {
            if (snapshot.exists()) {
              user = snapshot.val();
              user.isLoggedIn = true;

              res.status(200).json(_.omit(user, "password"));
            } else {
              res.status(200).json({ message: "Internal server error" });
            }
          }
        );
      })
      .catch((error) => {
        res.status(200).json({ error: error });
      });
  } catch (err) {
    console.log(err);
    res.status(200).json({ error: err });
  }
}

export default handler;
