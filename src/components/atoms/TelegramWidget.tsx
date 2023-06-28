import Script from "next/script"
import React, { useCallback, useEffect } from "react"

interface User {
  first_name: string
  last_name: string
  id: number
  username?: string
}

const TelegramWidget = () => {
  const onTelegramAuth = useCallback((user: User) => {
    console.log(
      "Logged in as " +
        user.first_name +
        " " +
        user.last_name +
        " (" +
        user.id +
        (user.username ? ", @" + user.username : "") +
        ")"
    )
  }, [])

  useEffect(() => {
    const _window = window as any

    _window.onTelegramAuth = onTelegramAuth

    return () => {
      delete _window.onTelegramAuth
    }
  }, [])

  return (
    <>
      <Script
        src="https://telegram.org/js/telegram-widget.js?22"
        strategy="afterInteractive"
      />
      {/* Render the Telegram widget container element */}
      <div
        className="telegram-login-button"
        data-telegram-login="samplebot"
        data-size="large"
        data-onauth="onTelegramAuth(user)"
        data-request-access="write"
      ></div>
    </>
  )
}

export default TelegramWidget
