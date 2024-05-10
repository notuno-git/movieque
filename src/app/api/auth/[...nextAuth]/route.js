import NextAuth, { Account, User as AuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connect from "@/utils/db";

async function login(credentials) {
  try {
    connect();
    const user = await User.findOne({ email: credentials.email });
    if (!user) throw new Error("wrong credentials")
    const isCorrect = await bcrypt.compare(credentials.password, user.password)
    if (!isCorrect) throw new Error("wrong credentials")
    return user
  } catch (error) {
    console.log("error while login");
    throw new Error(err);
  }
}

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        await connect();
        try {
          const user = await login(credentials);
          return user
        } catch (err) {
          throw new Error("Fail to login");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.email = user.email;
        token.id = user.id;
      }
      console.log("this is token", token);
      return
    },
    async session({ session, token }) {
      if (session) {
        session.user.username = token.username;
        session.user.email = token.email;
        session.user.id = token.id;
      }
      console.log("this is session", session);
      return
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
