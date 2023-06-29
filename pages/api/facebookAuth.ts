import axios, { AxiosHeaders } from "axios"

export default function handler(req: AxiosHeaders, res) {
  const { method } = req

  if (method === "GET") {
    // Make the API request to Facebook Graph API
    axios
      .get(
        `https://graph.facebook.com/v17.0/me?fields=id%2Cname&access_token=EAAah9lFqBGEBAOjijaL4sdcy5ZABrUw7omKlZBStnBukEIgVDrwTrDAIY8ssaLeETHqf21ZC2IPwEdPGgnogRWDLYcWZAydsQ8koRCB4XJNh77yVztvpnEqmRimPp8ZCkkGcjkhrfI9T9kPvGOx1KAI1ULyM5ZCZCeNspFHhHCmJQYRvcZCy92hY6FpOnDZAqrvwDQV0ytZCmUJVZBh6FZCGLVFd`
      )
      .then((response) => {
        const { data } = response
        res.status(200).json(data)
        return data
      })
      .catch((error) => {
        res
          .status(500)
          .json({ error: "Failed to fetch data from Facebook API" })
        return error
      })
  } else {
    res.status(405).json({ error: "Method Not Allowed" })
  }
}
