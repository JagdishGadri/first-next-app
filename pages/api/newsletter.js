import { connectDatabase, insertDocument } from "../../helpers/db-utils";
async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body;
    // const client = await connectDatabase();

    // server side validation
    if (!userEmail || !userEmail.includes("@")) {
      res.status(442).json({ message: "Invalid email adress" });
      return;
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Couldn't connect to database" });
      return;
    }

    try {
      await insertDocument(client, "emails", { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Insterting data Failed!" });
      return;
    }

    res.status(201).json({ message: "Signed Up!" });
  }
}
export default handler;
