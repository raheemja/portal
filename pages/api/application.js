import _ from "lodash";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, child, get, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import { v4 as uuidv4 } from "uuid";

const database = getDatabase();

export default async function handler(req, res) {
  const method = req.method;

  const uri =
    "mongodb+srv://webapp:XlGYOTRSozgWfy8N@cluster0.1nm6qnu.mongodb.net/?retryWrites=true&w=majority";

  const { MongoClient, ServerApiVersion } = require("mongodb");

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

  switch (method) {
    case "GET":
      break;

    case "POST":
      const application = req.query;

      try {
        console.log("Process started");

        // Connect the client to the server
        await client.connect();

        const database = client.db("applications");

        const meta = database.collection("meta");
        const details = database.collection("details");

        const result = await meta.insertOne(application.meta);
        const data = await details.insertOne({
          metaid: result.id,
          course: application.course,
        });

        console.log("Saved successfully");

        res.status(200).json({ message: "Saved successfully" });
      } catch (e) {
        console.log(e);
        res.status(200).json({ error: "Could not save", message: e });
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        console.log("Client closed");
      }

    case "DELETE":
      break;

    default:
  }
}
