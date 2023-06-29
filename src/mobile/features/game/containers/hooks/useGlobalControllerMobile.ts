import { IGetType } from "@feature/game/interfaces/IGameService"
import { useBaseProvider } from "@providers/BaseProvider"
import useProfileStore from "@stores/profileStore"
import { useCallback, useState } from "react"

const useGlobalControllerMobile = () => {
  const profile = useProfileStore((state) => state.profile.data)
  const { paramFromTelegram } = useBaseProvider()

  // State
  const [activeMenu, setActiveMenu] = useState<IGetType>("free-to-play")
  const [limit, setLimit] = useState<number>(10)
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)

  const isHideSyncTelegram =
    profile && !profile.telegram_id && paramFromTelegram.user_id

  const handleClickOpenLoading = useCallback(() => {
    // do something
    // setOpen("")
  }, [])

  return {
    setActiveMenu,
    activeMenu,
    limit,
    setLimit,
    iOS,
    handleClickOpenLoading,
    isHideSyncTelegram
  }
}

export default useGlobalControllerMobile
