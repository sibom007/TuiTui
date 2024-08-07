import { db } from "@/lib/prisma";
import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/authorization",
    error: "/authorization",
  },
  adapter: PrismaAdapter(db),

  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        const user = await db.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user.hashPassword) {
          throw new Error("User not found");
        }

        const currectPassword = await bcrypt.compare(
          credentials.password,
          user.hashPassword
        );

        if (!currectPassword) {
          throw new Error("Invalid credentials");
        }

        return user;
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token.sub && token.email) {
        session.user._id = token.sub;
        session.user.email = token.email;
      }
      return session;
    },
  },

  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },

  secret: process.env.NEXTAUTH_SECRET as string,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
