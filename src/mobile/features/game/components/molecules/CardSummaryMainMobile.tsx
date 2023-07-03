import TableIcon from "@components/icons/TableIcon"
import SocialShare from "@feature/blog/components/organisms/SocialShare"
import Helper from "@utils/helper"
import React from "react"

interface IGameCardSummaryMainProps {
  title?: string
  value?: number
  gameName?: string
  gameURLtoShare?: string
}

const CardSummaryMainMobile = ({
  title,
  gameName,
  gameURLtoShare,
  value
}: IGameCardSummaryMainProps) => (
  <div className="relative mt-4 flex w-full  flex-col items-center justify-center text-error-main">
    <TableIcon className="absolute z-[1] block w-full" />
    <span className="mb-4 text-sm font-bold uppercase">{title}</span>
    <span className="text-neon font-mondwest text-[50px] ">
      {value &&
        Helper.formatNumber(value, {
          maximumFractionDigits: 4
        })}
      ✨
    </span>
    {gameURLtoShare && (
      <div className="relative z-[1] my-2  flex w-full flex-col items-center justify-center">
        <span className="mb-1 text-xs font-bold uppercase ">
          Send to friends
        </span>
        <div className="flex">
          <SocialShare
            variant="large"
            shareTitle={gameName || "Nanamoto.games"}
            shareURL={gameURLtoShare}
          />
        </div>
      </div>
    )}
  </div>
)

export default CardSummaryMainMobile
