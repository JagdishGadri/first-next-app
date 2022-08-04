import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://Jagdish:jagdish@atlascluster.946tk.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
}
