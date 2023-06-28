import SlideAvatar from "@feature/avatar/components/molecules/SlideAvatar"
import {
  Box,
  Button,
  Divider,
  InputAdornment,
  TextField,
  Typography
} from "@mui/material"
import useProfileStore from "@stores/profileStore"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined"
import useGetAvatar from "@feature/avatar/containers/hook/useGetAvatar"
import AvatarProfile from "@components/atoms/avatar/AvatarProfile"
import CameraIcon from "@components/icons/CameraIcon"
import RepeatIcon from "@components/icons/RepeatIcon"
import { useToast } from "@feature/toast/containers"
import { MESSAGES } from "@constants/messages"
import useLoadingStore from "@stores/loading"
import ButtonIcon from "@components/atoms/button/ButtonIcon"
import { useTranslation } from "react-i18next"
import { commonPattern } from "@constants/regex"
import useUpdateProfile from "../containers/hook/getUpdateProfile"
import { IGeoProfile } from "../interfaces/IProfileService"
import { getGeoInfo } from "../containers/services/profile.service"

interface IProp {
  platinumCount: number
  userName: string
  userImage: string
  onCloseModal: () => void
  onRefetchProfile: () => void
}

const FormEditProfile = ({
  platinumCount,
  userName,
  userImage,
  onCloseModal,
  onRefetchProfile
}: IProp) => {
  const profile = useProfileStore((state) => state.profile.data)
  const { avatar } = useGetAvatar()
  const [defaultAvatar, setDefaultAvatar] = useState<string>(
    userImage || (profile ? profile.avatar : "")
  )

  const { setOpen, setClose } = useLoadingStore()
  const { t } = useTranslation()

  const { errorToast, successToast, warnToast } = useToast()
  const onOpenImage = () =>
    warnToast("Image upload is not available at the moment.")
  const { mutateUpdateProfile } = useUpdateProfile()

  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      _email: profile?.email,
      _username: userName,
      _avatar: profile?.avatar,
      _subscription: Boolean(profile?.subscription),
      _country: profile?.country,
      _user_ip_address: profile?.user_ip_address
    }
  })

  const onSubmit = (data) => {
    if (data && profile) {
      getGeoInfo()
        .then((res: unknown) => {
          const geo = res as unknown as IGeoProfile
          setOpen()
          if (res) {
            mutateUpdateProfile({
              _email: data._email,
              _username: data._username,
              _avatar: defaultAvatar,
              _subscription: data._subscription,
              _country: geo.country,
              _user_ip_address: geo.ip
            })
              .then((_res) => {
                if (_res) {
                  successToast(MESSAGES.edit_profile_success)
                  onRefetchProfile()
                  onCloseModal()
                  setClose()
                }
              })
              .catch(() => {
                errorToast(MESSAGES.please_fill)
                setClose()
              })
          }
        })
        .catch(() => {
          errorToast(MESSAGES.cant_update_data)
          setClose()
        })
    }
  }

  const slideTo = () => {}

  return (
    <Box
      component="div"
      className="w-[350px]"
    >
      {profile && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography className="mb-1 mt-2 font-neue-machina text-xs uppercase  text-neutral-500">
            {t("banner_upload")}
          </Typography>
          <div className="flex h-[66px] items-center justify-center rounded-xl bg-neutral-700">
            <ButtonIcon
              onClick={onOpenImage}
              icon={<CameraIcon />}
            />
          </div>
          <Typography
            className={`mt-2 font-neue-machina text-xs uppercase ${
              platinumCount === 0 ? "text-error-main" : "text-neutral-500"
            }`}
          >
            {platinumCount === 0
              ? `${t("minimum_1__platinum_rank")}`
              : `${t("recommend_size")} : W908 x H180`}
          </Typography>
          <Divider className="my-6" />
          <Typography className="mb-1 mt-2 font-neue-machina text-xs uppercase text-neutral-500">
            {t("display_name")}
          </Typography>
          <TextField
            className="mb-5 w-full"
            required
            type="text"
            sx={{
              "& .MuiOutlinedInput-root": {
                width: "100%"
              }
            }}
            value={watch("_username")}
            onChange={(event) => {
              let { value } = event.target
              value = value.replace(commonPattern, "")
              setValue("_username", value)
            }}
            id="username-create"
            placeholder={`${t("username")}`}
            size="medium"
            helperText={t("can_modified_later")}
            InputProps={{
              style: { fontFamily: "neueMachina" },
              startAdornment: (
                <InputAdornment position="start">
                  <PermContactCalendarOutlinedIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="start">
                  <RepeatIcon />
                </InputAdornment>
              )
            }}
          />
          {avatar ? (
            <SlideAvatar
              avatar={avatar}
              defaultAvatar={defaultAvatar ?? ""}
              slideTo={slideTo}
              setDefaultAvatar={setDefaultAvatar}
            />
          ) : (
            // "loading..."
            <div>{`${t("loading")}...`}</div>
          )}
          <Box component="div">
            <input
              hidden
              value={profile?.country}
              {...register("_country")}
            />
            <input
              hidden
              value={profile?.email}
              {...register("_email")}
            />
            <input
              hidden
              value={profile?.avatar}
              {...register("_avatar")}
            />
            <input
              hidden
              value={profile?.user_ip_address}
              {...register("_user_ip_address")}
            />
          </Box>
          <Typography className=" font-neue-machina text-sm   text-neutral-500">
            {t("avatar")}
          </Typography>
          {avatar ? (
            <Box
              component="div"
              className="hide-scroll mt-2 flex w-[350px] items-center gap-3 overflow-x-scroll pb-3"
            >
              {avatar.map((item, index) => (
                <Box
                  component="div"
                  id={item.name}
                  key={Number(index)}
                  className="cursor-pointer"
                  onClick={() => {
                    slideTo()
                    setDefaultAvatar(item.value)
                  }}
                >
                  <AvatarProfile
                    borderColor={
                      item.value === defaultAvatar
                        ? "border-error-main"
                        : "border-neutral-600"
                    }
                    border={{ width: "!w-[62px]", height: "!h-fit" }}
                    image={{ width: "!w-[58px]", height: "!h-[58px]" }}
                    src={item.value}
                    height="!h-fit"
                  />
                </Box>
              ))}
            </Box>
          ) : (
            // "loading..."
            <div>{`${t("loading")}...`}</div>
          )}
          <Button
            sx={{ fontFamily: "neueMachina" }}
            color="secondary"
            className="btn-rainbow-theme mt-[38px] w-full text-sm"
            variant="contained"
            size="large"
            type="submit"
          >
            {t("save")}
          </Button>
        </form>
      )}
    </Box>
  )
}

export default FormEditProfile
