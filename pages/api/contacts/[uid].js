import _ from "lodash";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, child, get, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import { v4 as uuidv4 } from "uuid";

const database = getDatabase();

export default async function handler(req, res) {
  const method = req.method;

  const { MongoClient, ServerApiVersion } = require("mongodb");

  const uri =
    "mongodb+srv://webapp:XlGYOTRSozgWfy8N@cluster0.1nm6qnu.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

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
      const { contact } = req.query;

      try {
        // Connect the client to the server
        await client.connect();

        const database = client.db("students");

        const students = database.collection("contacts");
        const results = await students.insertOne(contact);

        res.status(200).json({
          success: {
            message: `Contact ${contact.displayName} saved successfully.`,
          },
        });
      } catch (e) {
        console.log(e);
      } finally {
        await client.close();
      }

      break;

    case "DELETE":
      break;
    default:
  }
}
