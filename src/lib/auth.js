import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI is missing");

let clientPromise;
if (!global._mongoClientPromise) {
  const client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

const connectedClient = await clientPromise;
const db = connectedClient.db("book-borrowing");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client: connectedClient,
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,      // ← comma add
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },                                              // ← closing brace add
  },
  trustedOrigins: [
    "http://localhost:3000",
    "https://online-book-borrowing-platform-gamma.vercel.app",
  ],
});