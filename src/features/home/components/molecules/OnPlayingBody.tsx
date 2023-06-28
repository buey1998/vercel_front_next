import { Box, Chip } from "@mui/material"
import React, { memo } from "react"
import { Image } from "@components/atoms/image/index"
import { GAME_MOCKUP_CARD } from "@constants/images"
import { IRoomAvaliableData } from "@feature/home/interfaces/IHomeService"
import Link from "next/link"
import { v4 as uuid } from "uuid"
import SkeletonRoombarItem from "@components/atoms/skeleton/SkeletonRoombarItem"
import { useTranslation } from "react-i18next"
import OnPlayingRoomCardItem from "./OnPlayingRoomCardItem"

interface IOnPlayingBodyProps {
  gameItem: IRoomAvaliableData
}

const OnPlayingBody = ({ gameItem }: IOnPlayingBodyProps) => {
  const { t } = useTranslation()
  return (
    <div className="on-playing-body__wrapper w-full md:mx-2 md:max-w-[359px] lg:max-w-[320px]   xl:max-w-[434px]">
      <Box
        component="div"
        className="flex h-[156px] w-full flex-auto overflow-hidden rounded-2xl border-[1px] border-neutral-800 bg-neutral-780"
      >
        <div className="h-[156px] w-[156px]">
          <Link href={gameItem.game_url}>
            <Image
              src={gameItem.game_image || GAME_MOCKUP_CARD[0].src}
              alt={gameItem.game_name || GAME_MOCKUP_CARD[0].alt}
              width={200 || GAME_MOCKUP_CARD[0].width}
              height={200 || GAME_MOCKUP_CARD[0].height}
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          </Link>
        </div>
        <div className="custom-scroll flex w-[calc(100%-156px)] flex-col p-3">
          <ul className="flex flex-col gap-2">
            {gameItem.item_list.map((item) => (
              <OnPlayingRoomCardItem
                key={uuid()}
                // TODO: Backend need to change url form
                // For example:
                // Play to earn = /story-mode-games/${gamePath}/roomlist/id=?${itemId}
                // Free to play = /free-to-play-games/${gamePath}/roomlist/id=?${itemId}
                href={
                  item.room_list_url_new && "room_list_url_new" in item
                    ? item.room_list_url_new
                        .split("https://alpha.naka.im")
                        .join("")
                    : item.room_list_url_new ?? item.room_list_url
                }
                itemSize={gameItem?.game_free_play ? "Free" : item.item_size}
                roomCount={item.room_list.length}
              />
            ))}
            {gameItem.item_list.length <= 4 && <SkeletonRoombarItem />}
          </ul>
        </div>
      </Box>
      <div className="my-2 flex items-center justify-between font-neue-machina-semi">
        <span className="text-xs uppercase text-neutral-500">
          {gameItem.game_name}
        </span>
        {!gameItem?.game_free_play && (
          <Chip
            variant="outlined"
            color="primary"
            size="small"
            label={t(gameItem.item_list[0].item_name)}
          />
        )}
      </div>
    </div>
  )
}

export default memo(OnPlayingBody)
