import { TelegramUser } from "@components/atoms/button/TelegramWidget"
import { MESSAGES } from "@constants/messages"
import useGetProfileByEmail from "@feature/profile/containers/hook/getProfileByEmail"
import {
  useLinkToFacebook,
  useLinkToTelegram
} from "@feature/profile/containers/hook/useSyncProfileQuery"
import { fetchFacebookData } from "@feature/profile/containers/services/facebook.service"
import useToast from "@feature/toast/containers/useToast"
import { ELocalKey } from "@interfaces/ILocal"
import useLoadingStore from "@stores/loading"
import useProfileStore from "@stores/profileStore"
import Helper from "@utils/helper"
import { useCallback } from "react"

const useSyncProfile = () => {
  const profile = useProfileStore((state) => state.profile.data)
  const { mutateLinkToTelegram } = useLinkToTelegram()
  const { mutateLinkToFacebook } = useLinkToFacebook()
  const { errorToast, successToast } = useToast()
  const { onSetProfileData } = useProfileStore()
  const { profile: dataProfile } = useGetProfileByEmail(profile?.email ?? "")
  const { setClose, setOpen } = useLoadingStore()

  /**
   * @description Handle check user already exist in website, then sync data Facebook
   */
  const handleSyncFacebookId = useCallback(
    (facebook_id: string) => {
      if (profile && profile.facebook_id) {
        errorToast(MESSAGES.sync_facebook_already)
        return
      }
      if (profile && !profile.facebook_id) {
        // If user not exist in website, then create new user in website
        mutateLinkToFacebook({
          facebook_id
        })
          .then(async (res) => {
            setClose()
            setTimeout(() => {
              if (res.facebook_id) {
                successToast(MESSAGES.sync_facebook_success)
                if (dataProfile) {
                  onSetProfileData(dataProfile)
                }
              }
            }, 2000)
          })
          .catch((error) => {
            setClose()
            setTimeout(() => {
              errorToast(error.message)
            }, 2000)
          })
      }
    },
    [
      profile,
      errorToast,
      mutateLinkToFacebook,
      successToast,
      dataProfile,
      onSetProfileData,
      setClose
    ]
  )

  /**
   * @description Handle check user already exist in website, then sync data telegram
   */
  const handleSyncTelegramId = useCallback(
    (response: TelegramUser) => {
      Helper.setLocalStorage({
        key: ELocalKey.telegramUser,
        value: JSON.stringify(response)
      })

      if (profile && profile.telegram_id) {
        errorToast(MESSAGES.sync_telegram_already)
        return
      }

      if (profile && !profile.telegram_id) {
        // If user not exist in website, then create new user in website
        mutateLinkToTelegram({
          player_id: profile.id,
          telegram_id: response.id
        }).then(async (res) => {
          if (res.telegram_id) {
            successToast(MESSAGES.sync_telegram_success)
            Helper.removeLocalStorage(ELocalKey.telegramUser)
            Helper.removeLocalStorage(ELocalKey.telegramId)
            if (dataProfile) {
              onSetProfileData(dataProfile)
            }
          }
        })
      }
    },
    [
      profile,
      errorToast,
      mutateLinkToTelegram,
      successToast,
      dataProfile,
      onSetProfileData
    ]
  )

  /**
   * @description Handle click button sync facebook
   */
  const handleClickedSyncFacebook = useCallback(async () => {
    const result = await fetchFacebookData()
    if (result && result.id) {
      setOpen("")
      handleSyncFacebookId(result.id)
    }
  }, [handleSyncFacebookId, setOpen])

  return {
    handleSyncFacebookId,
    handleSyncTelegramId,
    handleClickedSyncFacebook
  }
}

export default useSyncProfile
