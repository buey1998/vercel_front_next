import axios from "axios"

export default async function handler(req, res) {
  const { userId, accessToken } = req.query

  try {
    const response = await axios.get(
      `https://graph.facebook.com/${userId}?fields=id,name&access_token=${accessToken}`
    )
    const { data } = response

    // Do something with the data

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from Facebook API" })
  }
}
