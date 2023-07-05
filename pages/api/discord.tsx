import NextAuth from "next-auth"

export default (req, res) => {
  res.status(200).json({ name: "John Doe" })
}
// import { options } from "./auth/[…nextauth]"

// const handler = NextAuth(options)

// export { handler as GET, handler as POST }

// import { OAuthConfig, OAuthUserConfig } from "next-auth/providers"

// export interface DiscordProfile extends Record<string, any> {
//   accent_color: number
//   avatar: string
//   banner: string
//   banner_color: string
//   discriminator: string
//   email: string
//   flags: number
//   id: string
//   image_url: string
//   locale: string
//   mfa_enabled: boolean
//   premium_type: number
//   public_flags: number
//   username: string
//   verified: boolean
// }

// export default function Discord<P extends DiscordProfile>(
//   options: OAuthUserConfig<P>
// ): OAuthConfig<P> {
//   return {
//     id: "discord",
//     name: "Discord",
//     type: "oauth",
//     authorization:
//       "https://discord.com/api/oauth2/authorize?client_id=1123574269398499448&redirect_uri=http%3A%2F%2Flocalhost%3A4004%2Fauth%2Fcallback%2Fdiscord&response_type=code&scope=identify%20email",
//     userinfo: "https://discord.com/api/users/@me",
//     profile(profile) {
//       if (profile.avatar === null) {
//         const defaultAvatarNumber = parseInt(profile.discriminator, 10) % 5
//         profile.image_url = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`
//       } else {
//         const format = profile.avatar.startsWith("a_") ? "gif" : "png"
//         profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`
//       }
//       return {
//         id: profile.id,
//         name: profile.username,
//         email: profile.email,
//         image: profile.image_url
//       }
//     },
//     style: {
//       logo: "/discord.svg",
//       logoDark: "/discord-dark.svg",
//       bg: "#fff",
//       text: "#7289DA",
//       bgDark: "#7289DA",
//       textDark: "#fff"
//     },
//     options
//   }
// }

// // import { getServerSession } from "next-auth"
// // import type { NextApiRequest, NextApiResponse } from "next"
// // import { authOptions } from "./auth/[…nextauth]"
// // // ../auth/[...nextauth]

// // export default async function handler(
// //   req: NextApiRequest,
// //   res: NextApiResponse
// // ) {
// //   const session = await getServerSession(req, res, authOptions)
// //   res.send(JSON.stringify(session, null, 2))
// // }

// // import { NextApiRequest, NextApiResponse } from "next"
// // import { Client, OAuth2Client } from "discord.js"

// // const clientID = "YOUR_DISCORD_CLIENT_ID"
// // const clientSecret = "YOUR_DISCORD_CLIENT_SECRET"
// // const redirectURI = "YOUR_REDIRECT_URI"

// // const discordClient = new Client()
// // const oauthClient = new OAuth2Client(clientID, clientSecret)

// // export default async function handler(
// //   req: NextApiRequest,
// //   res: NextApiResponse
// // ) {
// //   const code = req.query.code as string

// //   try {
// //     const token = await oauthClient.getToken({
// //       code,
// //       grantType: "authorization_code",
// //       redirectURI
// //     })

// //     discordClient.token = token.accessToken

// //     const user = await discordClient.users.fetch("@me")

// //     // Fetch the user's email separately
// //     const email = await discordClient.users
// //       .fetch(user.id)
// //       .then((user) => user.email)

// //     // Perform any additional logic with user data and email

// //     res.redirect("/success")
// //   } catch (error) {
// //     console.error("Discord authentication error:", error)

// //     res.redirect("/error")
// //   }
// // }
