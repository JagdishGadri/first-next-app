import { MongoClient } from "mongodb";
import { connectDatabase, insertDocument } from "../../helpers/db-utils";
async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body;
    const client = await connectDatabase();

    // server side validation
    if (!userEmail || !userEmail.includes("@")) {
      res.status(442).json({ message: "Invalid email adress" });
      return;
    }

    const result = await insertDocument(client, "emails", { email: userEmail });

    client.close();

    res.status(200).json({ enteredEmail: userEmail });
  } else {
    res.status(201).json({ message: "it works" });
  }
}
export default handler;
