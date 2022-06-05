import _ from "lodash";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, child, get, ref } from "firebase/database";
import { initializeApp } from "firebase/app";

import toArray from "../../../scripts/toArray";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FRIEBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
};

const app = initializeApp(firebaseConfig);

export default async function handler(req, res) {
  const method = req.method;
  const { uid } = req.query;

  /*
// Implement later
  switch (method) {
    case "GET":
      break;

    case "POST":
      break;

    case "DELETE":
      break;
    default:
  }
  */

  get(child(ref(getDatabase()), `todos/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let userTodos = snapshot.val();
        let todos = [];

        Object.values(userTodos).forEach((todo, i) => {
          if (todo.uid === uid) {
            todos.push(userTodos);
          }
        });

        res.status(200).json(todos);
      } else {
        res.status(200).json({
          error: {
            code: `app/user-not-found`,
          },
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
