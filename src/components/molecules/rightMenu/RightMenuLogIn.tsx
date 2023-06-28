import React, { useState } from "react"
import { Image } from "@components/atoms/image"
import StateIcon from "@components/atoms/stateIcon/StateIcon"
import IconButtonCustom from "@components/atoms/IconButtonCustom/IconButtonCustom"
import Balance from "@components/molecules/balance/Balance"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import {
  Typography,
  Collapse,
  CardActions,
  Card,
  ClickAwayListener
} from "@mui/material"
import Helper from "@utils/helper"
import StatProfile from "@components/molecules/statProfile/StatProfile"
import MenuProfile from "@components/molecules/menuProfile/MenuProfile"
import ButtonIcon from "@components/atoms/button/ButtonIcon"
import useProfileStore from "@stores/profileStore"
import Link from "next/link"
import TooltipsCustom from "@components/atoms/TooltipsCustom"
import { useWeb3Provider } from "@providers/Web3Provider"
import useGlobal from "@hooks/useGlobal"
import { useToast } from "@feature/toast/containers"
import useNotiStore from "@stores/notification"
import PlugIcon from "@components/icons/MenunIcon/PlugIcon"
import { useTranslation } from "react-i18next"
import ButtonToggleIcon from "../gameSlide/ButtonToggleIcon"

const RightMenuLogIn = () => {
  const { count } = useNotiStore()
  const profile = useProfileStore((state) => state.profile.data)
  const [expanded, setExpanded] = useState<boolean>(false)
  const [hoverExpand, setHoverExpand] = useState<boolean>(false)
  const { isMarketplace, isDeveloperPage, onClickLogout } = useGlobal()
  const { isConnected, address } = useWeb3Provider()
  const { successToast } = useToast()
  const { t } = useTranslation()

  const iconmotion = {
    hover: {
      scale: 1.2,
      rotate: 20,
      ease: "easeIn",
      transition: {
        duration: 0.4,
        stiffness: 500,
        type: "spring"
      }
    }
  }

  const themeColor = (): string => {
    if (isMarketplace) {
      return "secondary-main"
    }
    if (isDeveloperPage) {
      return "green-lemon"
    }
    return "error-main"
  }

  const handleOnExpandClick = () => {
    setExpanded((prev) => !prev)
  }

  const handleOnClickOutside = () => {
    setExpanded(false)
  }

  return (
    <div>
      <ClickAwayListener
        mouseEvent="onMouseDown"
        onClickAway={handleOnClickOutside}
      >
        <div>
          <TooltipsCustom
            title={
              <p className="text-primary-main">{t("please_approve_wallet")}</p>
            }
            color="warning"
            open={!address && !expanded && !isConnected}
          >
            <Card
              className={`${
                expanded ? "rounded-b-none rounded-t-[13px]" : "rounded-[13px]"
              } relative m-auto flex items-center justify-center`}
              sx={{
                maxWidth: 277,
                width: 277,
                height: 62,
                backgroundColor: "#010101D9",
                backgroundImage: "none"
              }}
            >
              <CardActions
                className="flex justify-between rounded-[13px] border-2  border-neutral-700 bg-black-500 px-0"
                sx={{ maxWidth: 265, width: 265, height: 50 }}
                disableSpacing
              >
                {/* notification */}
                {!isMarketplace && (
                  <Link href="/notification">
                    <ButtonIcon
                      variants={iconmotion}
                      whileHover="hover"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 4
                      }}
                      icon={
                        <NotificationsOutlinedIcon className="text-white-primary" />
                      }
                      className={`relative ml-1 mr-5 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-lg border border-neutral-700 bg-transparent before:absolute before:right-[6px] before:top-[5px] before:h-[6px] before:w-[6px] before:rounded-full ${
                        (count > 0 &&
                          "before:bg-error-main before:opacity-100") ||
                        "before:bg-transparent before:opacity-0"
                      }`}
                      aria-label="notification-button"
                    />
                  </Link>
                )}

                <div
                  className={`${
                    isMarketplace ? "ml-4" : "ml-0"
                  } flex-1 flex-col items-center`}
                >
                  <Typography className="text-sm font-bold">
                    {profile?.username}
                  </Typography>
                  {profile?.address && (
                    <Typography
                      paragraph
                      component="span"
                      variant="body1"
                      onClick={() => {
                        Helper.copyClipboard(profile?.address)
                        successToast("Copy Success")
                      }}
                      className={`cursor-pointer text-xs font-bold text-${themeColor().toString()}`}
                    >
                      {Helper.shortenString(profile?.address)}
                    </Typography>
                  )}
                </div>
                <Link href={`/profile/${profile?.id}`}>
                  <Image
                    src={profile?.avatar || "/images/avatar.png"}
                    alt="avatar"
                    width={40}
                    height={40}
                    className="mr-[5px] rounded-lg"
                  />
                </Link>
                {/* expand button */}
                <IconButtonCustom
                  expand={expanded.toString()}
                  onClick={handleOnExpandClick}
                  aria-expanded={Boolean(expanded)}
                  aria-label="expanded-menu-profile"
                  className={`mr-[2px] h-10 w-10 rounded-[13px] border-[2px] border-neutral-700 duration-100 ease-bounce ${
                    !expanded
                      ? `bg-${themeColor().toString()} hover:scale-[85%]`
                      : "bg-error-main"
                  }
                  ${!expanded ? "rotate-0" : "rotate-180"} ${
                    expanded && !hoverExpand
                      ? "rotate-[-45deg] scale-[75%]"
                      : "scale-1 rotate-0"
                  }
                  ${
                    !expanded
                      ? `hover:bg-${themeColor().toString()}`
                      : `hover:bg-error-main`
                  }`}
                  onMouseOver={() => {
                    setHoverExpand(true)
                  }}
                  onMouseOut={() => {
                    setHoverExpand(false)
                  }}
                >
                  <StateIcon
                    expanded={expanded}
                    hover={hoverExpand}
                  />
                </IconButtonCustom>
              </CardActions>
            </Card>
          </TooltipsCustom>
          <Collapse
            in={expanded}
            timeout="auto"
            className="rounded-b-[19px] pt-[10px]"
            sx={{
              position: "absolute",
              backgroundColor: "#010101D9",
              maxWidth: 277,
              width: 277,
              zIndex: 9998
            }}
          >
            <Balance widthBalance="w-[calc(100%-70px)]" />
            <StatProfile
              exp={{
                level: profile?.level ?? 0,
                expAmount: profile?.exp,
                maxExp: profile?.max_exp
              }}
              energy={{
                staminaPoint: profile?.stamina_point,
                totalStamina: profile?.total_stamina
              }}
              sx={{
                maxWidth: 265,
                minWidth: 265,
                height: 70
              }}
              type="row"
            />
            <MenuProfile />
            <ButtonToggleIcon
              startIcon={<PlugIcon />}
              text={t("logout")}
              handleClick={async () => {
                onClickLogout()
              }}
              className="btn-rainbow-theme my-4 bg-error-main px-14 text-sm text-white-default"
              type="button"
            />
          </Collapse>
        </div>
      </ClickAwayListener>
    </div>
  )
}

export default RightMenuLogIn
