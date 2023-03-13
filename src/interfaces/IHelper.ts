import { BigNumber } from "ethers"

export interface IPropsFormatNumberOption {
  notation?: "standard" | "scientific" | "engineering" | "compact"
  compactDisplay?: "short" | "long"
  maximumFractionDigits?: number
}

export interface IInfo {
  pages: number
  limit: number
  currentCount: number
  totalCount: number
}

export interface IFormatService {
  status: boolean
  info: IInfo
}

export interface IFormatMessageService {
  status: boolean
  message: string
}

export interface IBalance {
  status: boolean
  data: BigNumber
}
