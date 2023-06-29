import CONFIGS from "@configs/index"
import React from "react"
import FacebookLogin from "react-facebook-login"

const FacebookLoginButton = () => {
  const responseFacebook = (response) => {
    // eslint-disable-next-line no-console
    console.log("response", response) // Handle the response from Facebook
  }

  return (
    <FacebookLogin
      appId={CONFIGS.FACEBOOK_APP_ID}
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
    />
  )
}

export default FacebookLoginButton
