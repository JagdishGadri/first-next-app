import { MongoClient } from "mongodb";
import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "../../../helpers/db-utils";

async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Couldn't connect to database" });
    return;
  }

  // server side validation
  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(442).json({ message: "Invalid Input" });
      client.close();

      return;
    }
    const newComment = {
      eventId,
      email,
      name,
      text,
    };
    try {
      const result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;

      res.status(201).json({ message: "Added Comment", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Inserting comment failed" });
    }
  }
  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(
        client,
        "comments",
        { _id: -1 },
        { eventId: eventId }
      );
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "Failed to get the Comments" });
    }
  }
  client.close();
}

export default handler;
