export type TLocalKey =
  | "token"
  | "email"
  | "address"
  | "loginWith"
  | "time"
  | "wallet-connector"
  | "shareToEarn-ExpireTime"
  | "shareToEarn-code"
  | "telegramId"
  | "telegramUser"

/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
export enum ELocalKey {
  token = "token",
  email = "email",
  address = "address",
  loginWith = "loginWith",
  time = "time",
  walletConnector = "wallet-connector",
  shareToEarn = "shareToEarn-ExpireTime",
  shareToEarnCode = "shareToEarn-code",
  telegramId = "telegramId",
  telegramUser = "telegramUser"
}

export interface ILocal {
  key: TLocalKey
  value?: string
}
