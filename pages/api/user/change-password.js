import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../../ helpers/db";
import { hashPassword, verifyPassword } from "../../../ helpers/auth";

async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }
  const session = await getSession({ req: req });
  if (!session) {
    res.status(401).jason({ message: " User is not authenticated" });
    return;
  }

  const userEmail = session.user.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  const client = await connectToDatabase();

  const usersCollection = client.db().collection("users");

  const user = await usersCollection.findOne({ email: userEmail });

  if (!user) {
    res.status(404).json({ message: "User Not Found" });
    client.close();
    return;
  }

  const currentPassword = user.password;

  const passwordsAreEqual = await verifyPassword(oldPassword, currentPassword);

  if (!passwordsAreEqual) {
    res.status(403).json({ message: "The entered old password is incorrect" });
    client.close();
    return;
  }

  const newSecuredPassword = await hashPassword(newPassword);

  const result = await usersCollection.updateOne(
    { email: userEmail },
    { $set: { password: newSecuredPassword } }
  );

  client.close();
  res.status(200).json({ message: "Password successfully updated!" });
}

export default handler;
