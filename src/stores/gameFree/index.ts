import { IGame } from "@src/features/game/interfaces/IGameService"
import configZustandDevTools from "@src/utils/configDevtools"
import { create } from "zustand"
import { devtools } from "zustand/middleware"

export interface IUseGameItemStore {
  gameFree: IGame[]
  setGameFree: (_gameFreeData: IGame[]) => void
  clearGameFree: () => void
}

const uesGameFreeStore = create<IUseGameItemStore>()(
  devtools(
    (set) => ({
      gameFree: [],
      setGameFree: (_gameFreeData) => {
        set(
          () => ({ gameFree: _gameFreeData }),
          false,
          "GameFreeStore/setGameFree"
        )
      },
      clearGameFree: () => {
        set(() => ({ gameFree: [] }), false, "GameFreeStore/clearGameFree")
      }
    }),
    configZustandDevTools("GameFree-Store")
  )
)

export default uesGameFreeStore
