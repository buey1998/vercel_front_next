/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from "react"
import SettingIcon from "@components/icons/SettingIcon"
import ShapeIcon from "@components/icons/ShapeIcon"
import TableIcon from "@components/icons/TableIcon"
import ButtonToggleIcon from "@components/molecules/gameSlide/ButtonToggleIcon"
import Tagline from "@components/molecules/tagline/Tagline"
import { Box, Divider, Typography } from "@mui/material"
import useProfileStore from "@stores/profileStore"
import { IPlayerInfoResponse } from "@src/types/profile"
import { RandomReveal } from "react-random-reveal"
import { CHAR_SET_JP } from "@constants/characterSet"
import dayjs from "dayjs"
import useGetProfileInfo from "@feature/profile/containers/hook/getProfileInfo"
import Lavel from "@components/icons/Lavel"
import { Image } from "@components/atoms/image"
import Helper from "@utils/helper"
import { v4 as uuidv4 } from "uuid"
import DropdownLimit from "@components/atoms/DropdownLimit"
import { PaginationNaka } from "@components/atoms/pagination"
import useLoadingStore from "@stores/loading"
import GameStatOverview from "@feature/playerProfile/components/organisms/GameStatOverview"
import { useRouter } from "next/router"
import useGetProfileByEmail from "@feature/profile/containers/hook/getProfileByEmail"
import { useToast } from "@feature/toast/containers"
import { MESSAGES } from "@constants/messages"
import { useTranslation } from "react-i18next"
// import { useWeb3Provider } from "@providers/index"
// import Script from "next/script"
// import { useLinkToTelegram } from "@feature/profile/containers/hook/useSyncProfileQuery"
import useSyncProfile from "@mobile/features/game/containers/hooks/useSyncProfile"
import useGlobalControllerMobile from "@mobile/features/game/containers/hooks/useGlobalControllerMobile"
import { TelegramWidget } from "@components/atoms/button/TelegramWidget"
import FacebookLogin from "react-facebook-login"
import FacebookColorIcon from "@components/icons/SocialIcon/FacebookColorIcon"
import CONFIGS from "@configs/index"
import EditProfileModal from "./EditProfileModal"
import SliderBadges from "./SliderBadges"
import SideSocialShare from "../SideSocialShare"
import TotalCardContent from "./TotalCardContent"

const ProfileContent = () => {
  const { profile: pro } = useProfileStore()
  const profile = pro.data
  const [openEdit, setOpenEdit] = useState<boolean>(false)
  const [idPlayer, setIdPlayer] = useState<string>("")
  const [emailPlayer, setEmailPlayer] = useState<string>("")
  const [limit, setLimit] = useState<number>(20)
  const [page, setPage] = useState<number>(1)
  const [getProfileInfo, setGetProfileInfo] = useState<IPlayerInfoResponse>()
  const [totalCount, setTotalCount] = useState<number>(0)
  const fetchRef = useRef(false)
  const { setOpen, setClose } = useLoadingStore()
  const router = useRouter()
  const { errorToast } = useToast()
  const { player_id } = router.query
  const { t } = useTranslation()

  const {
    getProfileInfo: profileDataFromQuery,
    refetchGetProfile,
    isPreviousData,
    isFetching
  } = useGetProfileInfo({
    _limit: limit,
    _playerId: idPlayer,
    _page: page,
    _sort: "",
    _cheat: "All",
    _rewards_send_status: "All"
  })

  const { profile: profileFetched, isError } = useGetProfileByEmail(emailPlayer)
  // const { mutateLinkToTelegram } = useLinkToTelegram()
  const { handleSyncTelegramId, handleSyncFacebookId } = useSyncProfile()
  const { isShowSyncTelegram, isShowSyncFacebook } = useGlobalControllerMobile()

  useEffect(() => {
    if (isError) {
      errorToast(MESSAGES.please_login)
      router.push("/")
    }
  }, [isError, errorToast, router])

  useEffect(() => {
    let load = false

    if (!load) {
      if (!fetchRef.current && getProfileInfo && !isFetching) {
        fetchRef.current = true
        setTotalCount(getProfileInfo.data.info.totalCount)
      }
    }

    return () => {
      load = true
    }
  }, [getProfileInfo, isFetching])

  useEffect(() => {
    let load = false

    if (!load) {
      if (profileDataFromQuery) {
        setGetProfileInfo(profileDataFromQuery)
        setEmailPlayer(profileDataFromQuery.data.email)
      }
    }

    return () => {
      load = true
    }
  }, [profileDataFromQuery])

  useEffect(() => {
    let load = false

    if (!load) {
      if (!isPreviousData && idPlayer) {
        setOpen()
        refetchGetProfile().then(() => setClose())
      }
    }

    return () => {
      load = true
    }
  }, [idPlayer, isPreviousData, page, refetchGetProfile, setClose, setOpen])

  useEffect(() => {
    let load = false

    if (!load) {
      if (player_id) {
        setIdPlayer(player_id as string)
      }
    }

    return () => {
      load = true
    }
  }, [player_id])

  useEffect(() => {
    let load = false
    if (!load) {
      if (player_id) {
        setIdPlayer(player_id as string)
      }
    }
    return () => {
      load = true
    }
  }, [player_id])

  // const jsClickButton = async () => {
  //   const telegramParams: any = await localStorage.getItem("telegram-params")
  //   const telegramParse: any = JSON.parse(telegramParams)
  //   if (telegramParse) {
  //     const telegramId = String(telegramParse.id)
  //     if (telegramId) {
  //       mutateLinkToTelegram({
  //         player_id: idPlayer,
  //         telegram_id: Number(telegramId)
  //       })
  //       localStorage.removeItem("telegram-params")
  //     }
  //   }
  // }

  useEffect(() => {
    const timer = setTimeout(() => {
      const gandalf: any = document.querySelector("#telegram-login-NakaGameBot")
      const list: any = document.querySelector("#login-telegram")
      list.append(gandalf)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleOnExpandClick = () => {
    setOpenEdit(!openEdit)
  }
  const handleClose = () => setOpenEdit(false)

  const getRankCount = (rank: string) =>
    (getProfileInfo &&
      getProfileInfo.data.game_data.filter((data) => data.rank === rank)
        .length) ||
    0
  const bronzeCount = getRankCount("bronze")
  const silverCount = getRankCount("silver")
  const platinumCount = getRankCount("platinum")

  return profileFetched && getProfileInfo && !isFetching ? (
    <div className="login-telegram mt-8 w-full md:mt-0 md:w-[98%] lg:w-[90%]">
      {/* <div className="w-[90%]"> */}
      {/* <button
        onClick={jsClickButton}
        className="hidden"
        id="button-click"
      >
        Click
      </button>
      <div
        id="login-telegram"
        className="hidden pb-[20px]"
      >
        <Script
          async
          src="https://telegram.org/js/telegram-widget.js?22"
          data-telegram-login="NakaGameBot"
          data-size="large"
          data-onauth="onTelegramAuth(user)"
          data-request-access="write"
          strategy="lazyOnload"
        />
        <Script id="show-banner">
          {`function onTelegramAuth(params) { localStorage.setItem('telegram-params', JSON.stringify(params)); document.getElementById("button-click").click();} 
              `}
        </Script>
      </div> */}

      {/* ====== */}
      {isShowSyncTelegram() && (
        <>
          <TelegramWidget
            dataOnAuth={handleSyncTelegramId}
            botName="NakaGameMBot"
          />
          <Divider className="my-6 !block border-b border-[#35383F]" />
        </>
      )}
      {isShowSyncFacebook() && (
        <>
          <FacebookLogin
            appId={`${CONFIGS.FACEBOOK_APP_ID}`}
            autoLoad
            fields="name,email,picture"
            callback={handleSyncFacebookId}
            cssClass="my-facebook-button-class flex gap-2 items-center h-[50px] w-[293px] rounded-2xl border border-solid border-neutral-690 !bg-neutral-800"
            icon={<FacebookColorIcon />}
            textButton="Sync with Facebook"
          />
          <Divider className="my-6 !block border-b border-[#35383F]" />
        </>
      )}
      {/* ====== */}
      <SideSocialShare hidden="hidden lg:block" />
      <div className="relative">
        <Box
          component="img"
          sx={{
            height: "100%",
            width: "100%"
          }}
          alt="The house from the offer."
          src="/images/common/profile_banner.svg"
        />
        {profile && profile.id === (player_id as string) && (
          <>
            <div className="absolute right-0 top-0 m-1 sm:m-4">
              <ButtonToggleIcon
                handleClick={handleOnExpandClick}
                startIcon={<SettingIcon />}
                text={t("edit_profile")}
                className="z-[2] h-[40px] w-fit bg-neutral-900 !text-[8px] font-bold capitalize text-white-default sm:h-[50px] sm:w-[148px] sm:text-sm"
                type="button"
              />
            </div>
            <EditProfileModal
              onRefetchProfile={refetchGetProfile}
              handleClose={handleClose}
              showModal={handleOnExpandClick}
              openEdit={openEdit}
              platinumCount={platinumCount}
              userName={getProfileInfo.data.username}
              userImage={getProfileInfo.data.avatar}
            />
          </>
        )}
      </div>
      <div className="relative">
        <Tagline
          className="!my-2 mb-4 mt-4"
          text={t("simple_tagline")}
          bgColor={platinumCount === 0 ? `bg-neutral-800` : `bg-error-main`}
          icon={
            <ShapeIcon fill={platinumCount === 0 ? `#4E5057` : `#18181C`} />
          }
          textColor={`font-bold text-sm ${
            platinumCount === 0 ? "text-neutral-600" : "text-neutral-900"
          } `}
          show={false}
        />
        <div className="flex w-full justify-center">
          <div className="absolute bottom-[-50px] z-10 h-[110px] w-[110px] rounded-3xl border-8 border-neutral-900 bg-neutral-700 sm:h-[150px] sm:w-[150px]">
            <div
              className="absolute right-[28px] top-[-20px]
   z-20"
            >
              <div className="relative">
                <Lavel className="absolute" />
                <Typography className="absolute flex h-[45px] w-[45px] items-center justify-center p-2 font-digital-7 text-[24px] text-white-default">
                  {profileFetched.level}
                </Typography>
              </div>
            </div>

            <Image
              src={Helper.convertAvatar(getProfileInfo.data.avatar)}
              width={150}
              height={150}
              alt="profile-avatar"
              className="absolute !h-full rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="flex h-full justify-center">
        <TableIcon className="absolute" />
      </div>
      <div className="mt-[50px] flex w-full justify-center">
        <Typography className="font-mondwest text-[46px] uppercase  text-error-main shadow-error-main drop-shadow-xl">
          {getProfileInfo && (
            <RandomReveal
              isPlaying
              duration={0.1}
              revealDuration={1}
              characters={getProfileInfo.data.username}
              onComplete={() => ({ shouldRepeat: true, delay: 6 })}
              characterSet={CHAR_SET_JP}
            />
          )}
        </Typography>
      </div>
      <div className="flex w-full justify-center">
        <Typography className="text-xs font-bold uppercase text-error-main">
          {t("Joined")} : {dayjs(profileFetched.createdAt).format("MMM YYYY")}
        </Typography>
      </div>
      <div className="flex justify-center">
        <div className="mt-[50px] grid  grid-cols-2 gap-4 overflow-x-auto md:grid-cols-3">
          {getProfileInfo && (
            <>
              <TotalCardContent
                text={t("total_matches")}
                totalNumber={getProfileInfo.data.total_game_played}
                rank={false}
              />
              <TotalCardContent
                text={t("total_win_rate")}
                totalNumber={getProfileInfo.data.total_win_rate}
                rank={false}
              />
              <TotalCardContent
                text={t("total_rewards")}
                totalNumber={Helper.number4digit(
                  getProfileInfo.data.total_reward
                )}
                rank={false}
              />
              <TotalCardContent
                text={t("platinum")}
                totalNumber={platinumCount}
                rank
                icon="platinum"
              />
              <TotalCardContent
                text={t("silver")}
                totalNumber={silverCount}
                rank
                icon="silver"
              />
              <TotalCardContent
                text={t("bronze")}
                totalNumber={bronzeCount}
                rank
                icon="bronze"
              />
            </>
          )}
        </div>
      </div>
      <SliderBadges _playerId={profileFetched.id} />
      <GameStatOverview
        key={uuidv4()}
        data={getProfileInfo}
        limit={limit}
        page={page}
      />
      <div className="flex w-full justify-between">
        <PaginationNaka
          totalCount={totalCount}
          limit={limit}
          page={page}
          setPage={setPage}
        />
        <div className="flex">
          {/* <TextField
           sx={{
             input: {
               "&[type=text]": {
                 paddingLeft: "15px"
               }
             }
           }}
           placeholder="Search Game..."
           size="medium"
           InputProps={{
             endAdornment: (
               <InputAdornment position="end">
                 <SearchIcon />
               </InputAdornment>
             )
           }}
         /> */}
          <DropdownLimit
            className="ml-2"
            defaultValue={limit}
            list={[20, 40, 80]}
            onChangeSelect={setLimit}
          />
        </div>
      </div>
    </div>
  ) : null
}

export default ProfileContent
