// import CONFIGS from "@configs/index"
import axios from "axios"

export const fetchFacebookData = async () => {
  try {
    const response = await axios.get("/api/facebookData")

    const { data } = response
    // Do something with the data
    return data
  } catch (error) {
    // Handle error
    return error
  }
}
