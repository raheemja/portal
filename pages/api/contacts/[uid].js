import _ from "lodash";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, child, get, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FRIEBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();

export default function handler(req, res) {
  const method = req.method;

  switch (method) {
    case "GET":
      // Copies the user ID
      const { uid } = req.query;

      get(child(ref(database), `contacts/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            let allContacts = snapshot.val();
            let contacts = [];

            Object.values(allContacts).forEach((contact, i) => {
              if (contact.uid === uid) {
                contacts.push(contact);
              }
            });
            console.log(contacts);
            res.status(200).json(contacts);
          } else {
            res.status(200).json({
              error: {
                code: `app/no-contacts-found`,
              },
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case "POST":
      let contact = req.query;
      contact.id = uuidv4();

      console.log(contact);

      set(ref(database, "contacts/" + contact.id), contact);
      res.status(200).json({
        success: {
          message: `Contact ${contact.displayName} saved successfully.`,
        },
      });
      break;

    case "DELETE":
      break;
    default:
  }
}
