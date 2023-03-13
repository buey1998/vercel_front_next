import { ImageCustom } from "@components/atoms/image/Image"
import { IQuestReward } from "@feature/quest/interfaces/IQuestService"
import { Typography } from "@mui/material"
import React from "react"
import { motion } from "framer-motion"

interface IProp {
  reward: IQuestReward
  isLast: boolean
}

const RewardList = ({ reward, isLast }: IProp) => {
  const defaultImage = "/assets/icons/star.svg"
  const defaultAlt = reward.type

  const src = reward.image || defaultImage
  const alt = reward.name || defaultAlt
  const width = reward.image ? 55 : 45
  const height = reward.image ? 55 : 45

  return (
    <motion.div
      initial={{ y: 15 }}
      animate={{ y: 0 }}
      transition={{
        delay: 0.2,
        stiffness: 120,
        type: "spring",
        damping: 4
      }}
      className={`flex ${!isLast && " border-b border-neutral-800"} py-3`}
    >
      <div className="flex h-[75px] w-[75px] items-center justify-center rounded-[8px] border border-solid border-neutral-700">
        <ImageCustom
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
      <div className="ml-4 mt-4 grid content-between">
        <Typography className="text-sm uppercase text-neutral-400">
          {alt}
        </Typography>
        <div className="flex h-[30px] w-fit items-center justify-center rounded-[6px] border border-solid border-neutral-700 bg-neutral-800 p-[10px] text-neutral-400">
          <div className="flex items-center">
            <Typography className="text-xs uppercase text-black-default">
              amount
            </Typography>
            <Typography className="ml-2 text-sm uppercase text-neutral-300">
              {reward.amount} {reward.type}
            </Typography>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default RewardList
