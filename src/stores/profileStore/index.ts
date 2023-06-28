import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import {
  IProfile,
  IProfileResponse
} from "@feature/profile/interfaces/IProfileService"
import configZustandDevTools from "@utils/configDevtools"
import Helper from "@utils/helper"
import { ELocalKey } from "@interfaces/ILocal"

export interface IUseProfileStore {
  address: string | undefined
  profile: IProfileResponse
  isLogin: boolean
  getProfile: () => IProfileResponse
  getProfileAddress: () => string | undefined
  getProfileJWT: () => string | null
  onReset: () => void
  onSetProfileAddress: (_address: string | undefined) => void
  onSetProfileData: (_profile: IProfile) => void
  onSetProfileJWT: (_token: string) => void
}

const useProfileStore = create<IUseProfileStore>()(
  devtools(
    persist(
      (set, get) => ({
        wallet: false,
        address: undefined,
        isLogin: false,
        profile: {
          status: false,
          data: undefined,
          message: null
        },
        getProfile: () => get().profile,
        getProfileAddress: () => get().address,
        getProfileJWT: () => get().profile.data?.jwtToken || "",
        onReset: () => {
          Helper.resetLocalStorage()
          const resetData = {
            status: false,
            data: undefined,
            message: null
          }
          set(
            (prev) => ({
              ...prev,
              profile: { ...resetData },
              address: undefined,
              isLogin: false
            }),
            false,
            "ProfileStore/onReset"
          )
        },
        onSetProfileAddress: (_address) => {
          set(
            () => ({ address: _address }),
            false,
            "ProfileStore/onSetProfileAddress"
          )
        },
        onSetProfileData: (_profile) => {
          const dummyProfile = get().profile
          dummyProfile.data = { ..._profile }
          set(
            () => ({
              address: _profile.address,
              profile: { ...dummyProfile },
              isLogin: true
            }),
            false,
            "ProfileStore/onSetProfileData"
          )
        },
        onSetProfileJWT: (_token: string) => {
          const dummyProfile = get().profile
          // @ts-ignore
          dummyProfile.data.jwtToken = _token
          set(
            (prev) => ({ ...prev, profile: { ...dummyProfile } }),
            false,
            "ProfileStore/onSetProfileToken"
          )
          Helper.setLocalStorage({ key: ELocalKey.token, value: _token })
        }
      }),
      configZustandDevTools("Profile-Store")
    )
  )
)

export default useProfileStore
