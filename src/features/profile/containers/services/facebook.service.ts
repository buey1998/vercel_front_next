import CONFIGS from "@configs/index"
import axios from "axios"

export const fetchFacebookData = async () => {
  const userId = CONFIGS.FACEBOOK_APP_ID
  const accessToken = CONFIGS.FACEBOOK_ACCESS_TOKEN

  try {
    const response = await axios.get("/api/facebookApi", {
      params: { userId, accessToken }
    })

    const { data } = response
    // Do something with the data
    return data
  } catch (error) {
    // Handle error
    return error
  }
}
