import _ from "lodash";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, child, get, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import { v4 as uuidv4 } from "uuid";

const database = getDatabase();

export default function handler(req, res) {
  const method = req.method;

  switch (method) {
    case "GET":
      // Copies the user ID
      const { uid } = req.query;

      get(child(ref(database), `education/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            let allEntries = snapshot.val();
            let entries = [];

            Object.values(allEntries).forEach((entry, i) => {
              if (entry.uid === uid) {
                entries.push(contact);
              }
            });

            res.status(200).json(entries);
          } else {
            res.status(200).json({
              error: {
                code: `app/no-education-found`,
              },
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case "POST":
      const entry = req.query;

      set(ref(database, "education/" + entry.id), entry);
      res.status(200).json({
        success: {
          message: `Entry saved successfully.`,
        },
      });
      break;

    case "DELETE":
      break;
    default:
  }
}
