import { IGame } from "@feature/game/interfaces/IGameService"

export interface IInfo {
  pages: number
  limit: number
  currentCount: number
  totalCount: number
}

export interface IResponseFavoriteGame {
  status: boolean
  data: IGame[]
  message?: string
  info: IInfo
}
