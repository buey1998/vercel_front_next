import React from "react"
import { Image } from "@components/atoms/image"
import { Skeleton } from "@mui/material"

interface IGameSummaryRewardFooterProps {
  gameImage: string
  children?: React.ReactNode
}

const GameSummaryRewardFooterMobile = ({
  gameImage,
  children
}: IGameSummaryRewardFooterProps) => (
  <div className="game-summary-reward-footer">
    <div className="mx-auto grid grid-cols-3 items-center gap-2">
      <div className="rounded-md border border-neutral-800 ">
        {gameImage ? (
          <div className="overflow-hidden rounded-2xl">
            <Image
              width={300}
              height={300}
              src={gameImage}
              alt="img-profile"
              className="h-full w-full object-cover object-center"
            />
          </div>
        ) : (
          <Skeleton className="h-[240px] w-[250px] rounded-2xl" />
        )}
      </div>
      <div className="col-span-2 ">{children}</div>
    </div>
  </div>
)

export default GameSummaryRewardFooterMobile
