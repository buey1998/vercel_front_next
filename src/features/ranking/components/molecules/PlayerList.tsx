import { IPlayerRanking } from "@feature/ranking/interfaces/IRanking"
import { Typography } from "@mui/material"
import { memo } from "react"
import { Image } from "@components/atoms/image/index"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import Helper from "@utils/helper"
import { IGameReward } from "@src/types/games"

interface IProp {
  item: IPlayerRanking | IGameReward
  index: number
  className?: string
}

const PlayerList = ({ item, index, className }: IProp) => {
  const { formatNumber } = Helper
  return (
    <div className={`${className} flex items-center`}>
      <div>
        <Typography className="!text-right !font-neue-machina !text-sm !uppercase !text-white-primary">
          {"username" in item ? item.username : item.user_name}
        </Typography>
        <Typography
          className={`!rounded-less !border !border-solid !border-neutral-700 p-2 !text-right !font-neue-machina !text-xs !uppercase !text-grey-neutral04 ${
            index > 2 && "bg-neutral-900"
          }`}
        >
          {("current_score" in item || "naka_earn" in item) && (
            <>
              {"current_score" in item &&
                `SCORE ${formatNumber(item.current_score, {
                  maximumFractionDigits: 4
                })}`}
              {"naka_earn" in item &&
                `${formatNumber(item.naka_earn, {
                  maximumFractionDigits: 4
                })} NAKA`}
            </>
          )}
        </Typography>
      </div>
      <div className="animation-image !ml-2 h-[58px] w-[58px]">
        <Image
          src={item.avatar}
          width="200"
          height="200"
          alt={"username" in item ? item.username : item.user_name}
          className="h-[58px] w-full rounded-sm object-fill object-center"
        />
      </div>
      <div className="show-arrow ml-3 hidden">
        <ArrowForwardIcon />
      </div>
    </div>
  )
}

export default memo(PlayerList)
