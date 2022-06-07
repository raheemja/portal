import _ from "lodash";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  getDatabase,
  ref,
  child,
  get,
  set,
  push,
  update,
} from "firebase/database";
import { initializeApp } from "firebase/app";
import { strip } from "../../../scripts/strip";

export default async function handler(req, res) {
  const method = req.method;
  console.log(method);

  switch (method) {
    case "GET":
      const { uid } = req.query;

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
      break;

    case "PUT":
      break;

    case "PATCH":
      const user = req.query;

      const db = getDatabase();
      const userRef = ref(db, `users/${user.uid}`);

      update(userRef, strip(user))
        .then(() => {
          get(child(userRef, `users/${user.uid}`)).then((snapshot) => {
            res.status(200).json({ message: "Changes made successfully" });
          });
        })
        .catch((e) => {
          console.log(e);
          res.status(200).json(e);
        });

      break;

    case "POST":
      break;

    case "HEAD":
      break;

    case "DELETE":
      break;
    default:
  }
}
