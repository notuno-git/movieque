import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connect from "@/utils/db";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connect();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account }) {
      if (account?.provider == "credentials") {
        return true;
      }
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
