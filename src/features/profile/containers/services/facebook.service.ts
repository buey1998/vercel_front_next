import axios from "axios"

export interface IFacebookDataProfile {
  id: string
  name: string
}

export const fetchFacebookData = () =>
  new Promise<IFacebookDataProfile>((resolve, reject) => {
    axios
      .get<IFacebookDataProfile>("/api/facebookAuth")
      .then((res) => {
        resolve(res.data)
      })
      .catch((error: Error) => {
        reject(error)
      })
  })
