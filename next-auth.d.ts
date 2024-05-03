import NextAuth, { DefaultSession } from "next-auth/next";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: any;
    } & DefaultSession["user"];
  }
}
