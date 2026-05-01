import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.NEXT_PUBLIC_MONGO_URL);
const db = client.db("gym-server");
console.log(process.env.NEXT_PUBLIC_MONGO_URL);

export const auth = betterAuth({

  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),


    emailAndPassword: { 
    enabled: true, 
  }, 
});