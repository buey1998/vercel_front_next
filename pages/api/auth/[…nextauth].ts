import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import DiscordProvider from "next-auth/providers/discord"

const scopes = ["identify"].join(" ")

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
