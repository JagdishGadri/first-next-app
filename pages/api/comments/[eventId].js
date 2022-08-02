import { MongoClient } from "mongodb";
import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "../../../helpers/db-utils";

async function handler(req, res) {
  const eventId = req.query.eventId;
  const recievedData = req.body;
  const client = await connectDatabase();
  const { email, name, text } = req.body;
  const newComment = {
    eventId,
    ...recievedData,
  };

  // server side validation
  if (req.method === "POST") {
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(442).json({ message: "Invalid Input" });
      return;
    }
    const result = await insertDocument(client, "comments", newComment);

    newComment.id = result.insertedId;

    res.status(200).json({ message: "Added Comment", data: newComment });
  }
  if (req.method === "GET") {
    const db = client.db();
    const documents = await getAllDocuments(
      client,
      "comments",
      { _id: -1 },
      { eventId: eventId }
    );

    res.status(200).json({ comments: documents });
  }
  client.close();
}

export default handler;
