import ButtonClose from "@components/atoms/button/ButtonClose"
import ButtonIcon from "@components/atoms/button/ButtonIcon"
import LockIcon from "@components/icons/LockIcon"
import PlusOutlineIcon from "@components/icons/PlusOutlineIcon"
import SettingIcon from "@components/icons/SettingIcon"
import RoomListBox from "@components/molecules/roomList/RoomListBox"
import { Chip } from "@mui/material"
import { useRouter } from "next/dist/client/router"
import React from "react"

interface IProp {
  roomTag: string | number
  roomName: string
  timer?: {
    time: Date
    onExpire?: () => void
  }
  player?: {
    currentPlayer: number
    maxPlayer?: number
  }
  onOutRoom?: () => void
  className?: string
  isSummaryPage?: boolean
  onClick?: () => void
}

const HeaderWaitingRoom = ({
  roomTag,
  roomName,
  timer,
  player,
  onOutRoom,
  className,
  isSummaryPage,
  onClick
}: IProp) => {
  const router = useRouter()

  return (
    <div
      className={`flex flex-wrap items-center gap-5 border-b border-neutral-800 p-2 lg:h-[72px] ${className}`}
    >
      <div className="flex flex-auto items-center gap-2 md:flex-none md:gap-5 xl:ml-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800">
          <ButtonClose
            onClick={() => {
              onOutRoom ? onOutRoom() : router.back()
            }}
          />
        </div>
        <span
          className="text-xs text-neutral-500 "
          aria-label="room-tag"
        >
          #{roomTag}
        </span>
        <LockIcon />
        <span
          className="text-default uppercase text-neutral-300"
          aria-label="room-nam"
        >
          ROOM : {roomName}
        </span>
        {isSummaryPage && (
          <Chip
            label="FINISHED GAME"
            variant="filled"
            color="success"
            size="small"
            className="!bg-green-lemon"
          />
        )}
      </div>
      <RoomListBox
        type="timer"
        timer={timer}
        color="green"
        shade="lemon"
      />
      <RoomListBox
        type="player"
        player={player}
        // for invite button
        icon={
          !isSummaryPage ? (
            <PlusOutlineIcon className="mr-[15px] cursor-pointer" />
          ) : null
        }
        onClick={onClick}
        //
        color="neutral"
        shade="500"
      />
      <ButtonIcon
        type="square"
        icon={<SettingIcon />}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 xl:mr-4"
      />
    </div>
  )
}

export default HeaderWaitingRoom
