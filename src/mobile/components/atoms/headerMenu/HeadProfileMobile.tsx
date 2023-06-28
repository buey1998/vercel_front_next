import React from "react"
import useProfileStore from "@stores/profileStore"
import IconTemplate from "@mobile/components/templates/IconTemplate"
import BellRingRoundIcon from "@components/icons/BellRingRoundIcon"
import { ImageCustom } from "@components/atoms/image/Image"
import { Box } from "@mui/material"
import useNotiStore from "@stores/notification"
import NotificationModal from "@mobile/components/organisms/modal/NotificationModal"
import ProfileSettingModal from "@mobile/components/organisms/modal/ProfileSettingModal"
import useDrawerControllerMobile from "@mobile/features/game/containers/hooks/useDrawerControllerMobile"
import useDrawerControllerMobileStore from "@stores/drawerControllerMobile"
import HeaderSyncAccount from "./HeaderSyncAccount"

export const StyledAvatar = {
  color: "#E0E0E0",
  ".head-profile__info--avatar": {
    width: "48px",
    height: "48px",
    borderRadius: "48px",
    overflow: "hidden"
  },
  "p": {
    margin: 0
  }
}

const HeadProfileMobile = () => {
  const profile = useProfileStore((state) => state.profile.data)
  const { count } = useNotiStore()
  const { openNotification, setOpenNotification } = useDrawerControllerMobile()

  const {
    openProfileCreate: toggleProfileCreate,
    setOpenProfileCreate: setToggleProfileCreate,
    openProfileSetting: toggleProfileSetting,
    setOpenProfileSetting: setToggleProfileSetting,
    openSyncAccount: toggleSyncAccount,
    setOpenSyncAccount: setToggleSyncAccount
  } = useDrawerControllerMobileStore()

  return (
    <header className="header bg-[#F32429] pb-[55px]">
      {profile && !profile.telegram_id && (
        <HeaderSyncAccount
          target="Telegram"
          open={toggleSyncAccount}
          setOpenSyncAccount={(_toggle) => setToggleSyncAccount(_toggle)}
        />
      )}
      <div className="flex items-center justify-between px-5 py-10">
        <Box
          component="div"
          className="head-profile__info--wrapper flex items-center gap-4"
          sx={StyledAvatar}
          onClick={() => setToggleProfileSetting(true)}
        >
          <div className="head-profile__info--avatar">
            <ImageCustom
              src={profile?.avatar || "/images/avatar.png"}
              alt="avatar"
              width={55}
              height={55}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="head-profile__info--welcome flex flex-col">
            <p className="font-urbanist text-[14px]">Welcome Back! 👋</p>
            <p className="font-urbanist text-[20px] font-bold">
              {profile?.username}
            </p>
          </div>
        </Box>
        <div className="head-profile__mobile--right flex items-center gap-4">
          {/* TODO: Open this when In-App purchase is ready */}
          {/* <IconTemplate>
            <WalletRoundIcon />
          </IconTemplate> */}
          <IconTemplate onClick={() => setOpenNotification(true)}>
            <div
              className={`absolute right-[15px] top-[12px] h-[6px] w-[6px] rounded-full ${
                count > 0 && "bg-error-main opacity-100"
              }`}
            />
            <BellRingRoundIcon />
          </IconTemplate>
        </div>
      </div>

      {/* Modal Notification */}
      <NotificationModal
        open={openNotification}
        setOpenNotification={setOpenNotification}
      />
      {/* Profile Setting Modal */}
      <ProfileSettingModal
        open={toggleProfileSetting}
        setProfileSetting={(_toggle) => setToggleProfileSetting(_toggle)}
        type="edit"
      />
      {/* Profile Setting Modal */}
      <ProfileSettingModal
        open={toggleProfileCreate}
        setProfileSetting={(_toggle) => setToggleProfileCreate(_toggle)}
        title="Create Profile"
        type="create"
      />
    </header>
  )
}

export default HeadProfileMobile
