import _ from "lodash";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, child, get, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import { v4 as uuidv4 } from "uuid";

import toArray from "../../../scripts/toArray";

export default async function handler(req, res) {
  const method = req.method;
  const { uid } = req.query;

  switch (method) {
    case "GET":
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
              message: "You're all caught up! No todos found.",
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case "POST":
      let todo = req.query;

      set(ref(database, "todos/" + todo.id), todo);

      res.status(200).json({
        success: {
          message: `Todo list saved successfully.`,
        },
      });
      break;

    case "DELETE":
      break;
    default:
  }
}
