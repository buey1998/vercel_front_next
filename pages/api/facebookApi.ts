/* eslint-disable no-unused-vars */
import CONFIGS from "@configs/index"
import axios from "axios"

export default function handler(req, res) {
  const { method } = req

  if (method === "GET") {
    const fields = "id,name"

    // Make the API request to Facebook Graph API
    axios
      .get(`https://graph.facebook.com/me?fields=${fields}`, {
        headers: {
          "Authorization": `Bearer ${CONFIGS.FACEBOOK_ACCESS_TOKEN}` // Replace with your access token
        }
      })
      .then((response) => {
        const { data } = response
        res.status(200).json(data)
      })
      .catch((error) => {
        res
          .status(500)
          .json({ error: "Failed to fetch data from Facebook API" })
      })
  } else {
    res.status(405).json({ error: "Method Not Allowed" })
  }
}
