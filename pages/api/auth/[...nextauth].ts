import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      // @ts-ignore: Ignore possibility that ID is undefined
      clientId: process.env.GITHUB_ID,
      // @ts-ignore: Ignore possibility that SECRET is undefined
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
