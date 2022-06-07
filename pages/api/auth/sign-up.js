import _ from "lodash";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import { uuid } from "uuidv4";

// Models
import { TodoModel } from "../../../models/user/todo";

// Defaults
import defaultTodos from "../../../data/defaults/todos.json";

export default async function handler(req, res) {
  let defaults;

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

      defaultTodos.forEach((todo, i) => {
        let item = TodoModel(todo);
        item.uid = user.uid;
        set(ref(database, "todos/" + item.id), item);
      });

      res.status(200).json(user);
    })
    .catch((error) => {
      console.log(error);
      res.status(200).json(error);
    });
}
