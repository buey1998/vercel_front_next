import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

const scopes = ["identify"].join(" ")

// console.log("scopes", scopes)

// const options = {
//   providers: [
//     Providers.Discord({
//       clientId: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
//       clientSecret: process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET,
//       // clientId: "1123574269398499448",
//       // clientSecret: "YAMMc-7N0MN9athc2WWZ-bBjzEVc_5ov",
//       // redirectUri: "http://localhost:4004/",
//       authorization: { params: { scope: scopes } }
//     })
//   ]

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: "1123574269398499448",
      clientSecret: "YAMMc-7N0MN9athc2WWZ-bBjzEVc_5ov",
      // clientId: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
      // clientSecret: process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET,
      // callbackUrl: "http://localhost:4004",
      accessTokenUrl: "https://discord.com/api/oauth2/token",
      profileUrl: "https://discord.com/api/users/@me",
      // clientId: "1123574269398499448",
      // clientSecret: "YAMMc-7N0MN9athc2WWZ-bBjzEVc_5ov",
      // redirectUri: "http://localhost:4004/",
      authorization: { params: { scope: scopes } }
    })
  ]
  // callbacks: {
  //   async session({ session, token, user }) {
  //     session.accessToken = token.access_token
  //     return session
  //   },

  //   async jwt({ token, account }) {
  //     if (account) {
  //       token.accessToken = account.access_token
  //       console.log(token.accessToken)
  //     }
  //     return token
  //   }
  // }
  // callbacks: {
  //   session(session, token) {
  //     return session // The type here should match the one returned in `useSession()`
  //   },
  // },
})
// pages: {
//   signIn: "/auth/signin",
//   // "https://discord.com/api/oauth2/authorize?client_id=1123574269398499448&redirect_uri=http%3A%2F%2Flocalhost%3A4004%2Fapi%2Fauth%2Fcallback%2Fdiscord&response_type=code&scope=identify%20email",
//   // signOut: "/auth/signout",
//   error: "pages/auth/error.js"
// },
// callbacks: {
//   async signIn({ user, account, profile, email, credentials }) {
//     const isAllowedToSignIn = true
//     if (isAllowedToSignIn) {
//       return true
//     }
//     // Return false to display a default error message
//     return false
//     // Or you can return a URL to redirect to:
//     // return '/unauthorized'
//   }
// }
// callbacks: {
//   async signIn({ user, account, profile, email, credentials }) {
//     const isAllowedToSignIn = true
//     if (isAllowedToSignIn) {
//       return true
//     }
//     // Return false to display a default error message
//     return false
//     // Or you can return a URL to redirect to:
//     // return '/unauthorized'
//   },
//   async jwt({ token, user }) {
//     if (user) {
//       token.id = user.id
//     }
//     return token
//   }
//   // async session({ session, token }) {
//   //   session.user.id = token.id
//   //   return session
//   // }
// }
// callbacks: process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI
// callbacks: {
//   async jwt({ token }) {
//     token.userRole = "admin"
//     return token
//   }
// }
// callbacks: {
//   async signIn(user, account, profile) {
//     return true
//   },
//   async redirect(url, baseUrl) {
//     return url.startsWith(baseUrl) ? url : baseUrl
//   }
// }
// }
// export default (req: any, res: any) => NextAuth(req, res, options)

// import { NextApiRequest, NextApiResponse } from "next"
// import NextAuth from "next-auth"
// import DiscordProvider from "next-auth/providers/discord"
// import Providers from "next-auth/providers"

// const options = {
//   providers: [
//     DiscordProvider({
//       clientId: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
//       clientSecret: process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET
//     })
//   ],
//   callbacks: {
//     async signIn(user, account, profile) {
//       // Custom logic upon successful sign-in
//       console.log("User signed in:", user)
//       // Return `true` to allow the sign-in
//       return true
//     },
//     async redirect(url: string, baseUrl: string) {
//       // Custom logic for redirect URL
//       console.log("Redirect URL:", url)
//       // Check if the URL starts with the base URL
//       if (url.startsWith(baseUrl)) {
//         return url
//       }
//       // Redirect to the base URL if it doesn't match
//       return baseUrl
//     }
//   }
// }

// export default (req: NextApiRequest, res: NextApiResponse) =>
//   NextAuth(req, res, options)

// import NextAuth from "next-auth"
// import DiscordProvider from "next-auth/providers/discord"

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     DiscordProvider({
//       clientId: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
//       clientSecret: process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET
//     })
//     // ...add more providers here
//   ]
// }
// export default NextAuth(authOptions)
