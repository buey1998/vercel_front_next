import React from "react"
import _ from "lodash"
import { ISummaryItemUsedProps } from "@feature/game/containers/components/molecules/SummaryItemUsed"
import SummaryGameData from "@feature/game/containers/components/molecules/SummaryGameData"
import CardSummaryMainMobile from "../molecules/CardSummaryMainMobile"
import GameSummaryRewardFooterMobile from "../templates/GameSummaryRewardFooterMobile"

interface IGameSummaryBodyReturnItemMobile extends ISummaryItemUsedProps {
  gameImage: string
  gameName: string
  gameURLtoShare?: string
}

const GameSummaryBodyReturnItemMobile = ({
  gameImage,
  gameName,
  ...props
}: IGameSummaryBodyReturnItemMobile) => (
  <div className="flex-[1_1_100%] overflow-hidden">
    <CardSummaryMainMobile
      title="Return Used Item"
      value={props.usedAmount}
    />
    <GameSummaryRewardFooterMobile gameImage={gameImage}>
      <div className="flex max-w-[310px] flex-1 flex-col gap-[10px]">
        <SummaryGameData
          gameName={gameName}
          itemName={props.itemName}
        />
      </div>
    </GameSummaryRewardFooterMobile>
  </div>
)

export default GameSummaryBodyReturnItemMobile
