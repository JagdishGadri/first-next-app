import { connectToDatabase } from "../../../ helpers/db";
import { hashPassword } from "../../../ helpers/auth";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { email, password } = data;

    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7
    ) {
      res.status(422).json({
        message: "Invalid input - password shold atleast 7 characters long",
      });
      return;
    }

    const client = await connectToDatabase();

    const db = client.db();

    const existingUser = await db.collection("users").findOne({ email: email });

    if (existingUser) {
      res.status(422).json({ message: "User alrady exists" });
      client.close();
      return;
    }
    const securePassword = await hashPassword(password);

    db.collection("users").insertOne({
      email: email,
      password: securePassword,
    });
  }
}

export default handler;
