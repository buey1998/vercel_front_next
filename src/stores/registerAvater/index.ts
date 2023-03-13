import { create } from "zustand"
import configZustandDevTools from "@src/utils/configDevtools"
import { devtools } from "zustand/middleware"

interface IZustandRegister {
  getSubmitClickRegister: boolean
  setSubmitClickRegister: (_toggle: boolean) => void
  getClickRegisterFacebook: boolean
  setClickRegisterFacebook: (_toggle: boolean) => void
}

const useRegisterAvatarStore = create<IZustandRegister>()(
  devtools(
    (set) => ({
      getSubmitClickRegister: false,
      setSubmitClickRegister: (_toggle: boolean) => {
        set(() => ({ getSubmitClickRegister: _toggle }))
      },
      getClickRegisterFacebook: false,
      setClickRegisterFacebook: (_toggle: boolean) => {
        set(() => ({ getClickRegisterFacebook: _toggle }))
      }
    }),
    configZustandDevTools("RegisterAvatar-Store")
  )
)

export default useRegisterAvatarStore
