import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { verifyPassword } from "../../../ helpers/auth";
import { connectToDatabase } from "../../../ helpers/db";
export default NextAuth({
  session: { jwt: true },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connectToDatabase();
        const usersCollection = client.db().collection("users");

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();

          throw new Error("No user Found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );
        if (!isValid) {
          throw new Error("Could not log you in... Please Check the password");
        }
        client.close();

        return { email: user.email };
      },
    }),
  ],
});

// 1.
// NextAuth package behind the scene exposes routes for
// (i.e.,/api/auth/signin, /api/auth/login, api/auth/callback/:provider )

// 2.
// we export NextAuth()(!! by executing it) because when we execute it, it returns a handler function.
// I need to resturn a handler function because it is in the end a API route.
// When we call a NextAuth function we can provide a configuration object to it which allows us
// to configure the behaviour of NextAuth.

// 3.
// if we return an object inside authorize method in NextAuth function
// than we let the NextAuth know that the authorization successed
// that object will be encoded into the json web token
