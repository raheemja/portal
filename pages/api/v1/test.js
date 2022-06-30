// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const axios = require("axios").default;

  const { MongoClient, ServerApiVersion } = require("mongodb");
  const uri =
    "mongodb+srv://webapp:Bdd9cirhbOqBzMcs@cluster0.kkbmo.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

  async function run() {
    try {
      // Connect the client to the server
      await client.connect();

      const database = client.db("insertDB");
      const haiku = database.collection("haiku");

      // create a document to insert
      const doc = {
        title: "Record of a Shriveled Datum",
        content: "No bytes, no problem. Just insert a document, in MongoDB",
      };

      const result = await haiku.insertOne(doc);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);

      // Establish and verify connection
      await client.db("admin").command({ ping: 1 });
      res.status(200).json(result);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }

  run().catch(console.dir);

  //  res.status(200).json({ message: "hello" });
}
