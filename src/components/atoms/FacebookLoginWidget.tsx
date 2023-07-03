// import CONFIGS from "@configs/index"
import React from "react"
import FacebookLogin from "react-facebook-login"

const FacebookLoginWidget = () => {
  const responseFacebook = (response) => {
    // eslint-disable-next-line no-console
    console.log("response", response) // Handle the response from Facebook
  }

  return (
    <FacebookLogin
      appId="1866929160193121"
      autoLoad
      fields="name,email,picture"
      callback={responseFacebook}
    />
  )
}

export default FacebookLoginWidget
