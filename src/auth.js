import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

// export const {
//     handlers: { GET, POST },
//     auth,
//     signIn,
//     signOut,
//   } = NextAuth({

//     providers: [
//       GitHub({
//         clientId: process.env.GITHUB_ID,
//         clientSecret: process.env.GITHUB_SECRET,
//       }),
//     ],
//     callbacks: {
//         async redirect({ url, baseUrl }) {
//           // Allows relative callback URLs
//           if (url.startsWith("/")) return `${baseUrl}${url}`;
//           // Allows callback URLs on the same origin
//           else if (new URL(url).origin === baseUrl) return url;
//           return baseUrl;
//         }
//     }
// });

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
});
