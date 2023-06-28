import React, { memo, useState } from "react"
import { Chip, Typography } from "@mui/material"
import NumberRank from "@feature/ranking/components/atoms/NumberRank"
import { Image } from "@components/atoms/image"
import { v4 as uuidv4 } from "uuid"
import Helper from "@utils/helper"
import TooltipsCustom from "@components/atoms/TooltipsCustom"
import { motion } from "framer-motion"
import { IPlayerInfoResponse } from "@src/types/profile"
import { useTranslation } from "react-i18next"
import RankIcon from "../atoms/RankIcon"
import SliderGameStat from "./SliderGameStat"

interface IProp {
  data: IPlayerInfoResponse
  limit: number
  page: number
}

const GameStatOverview = ({ data, limit, page }: IProp) => {
  const [openBadges, setOpenBadges] = useState<boolean>(false)
  const handleOnExpandClick = () => {
    setOpenBadges(!openBadges)
  }

  const { t } = useTranslation()

  return (
    <div className="w-full">
      <SliderGameStat
        openBadges={openBadges}
        handleOnExpandClick={handleOnExpandClick}
      />
      {openBadges ? null : (
        <div
          key={uuidv4()}
          className="mb-10 grid w-full gap-2 rounded-[26px] bg-neutral-800 p-2 "
        >
          {data.data.game_data.map((item, index) => (
            <div
              key={uuidv4()}
              className="grid w-full  grid-cols-4 gap-4 rounded-[18px] bg-neutral-900 p-8 sm:min-w-min md:grid-cols-8 "
            >
              {/* sm:min-w-min md:max-w-max sm:min-w-[720px] */}
              <div className="col-span-2 md:col-span-3">
                <NumberRank
                  className="m-0 h-6 w-8 !rounded-[4px]"
                  index={index + limit * (page - 1)}
                />
                <h1 className="py-5 text-neutral-300">{item.name}</h1>
                <TooltipsCustom
                  className="truncate text-xs text-neutral-500 hover:text-clip"
                  placement="bottom"
                  title={item.story}
                  color="error"
                >
                  <div>{item.story}</div>
                </TooltipsCustom>
              </div>
              <div className="col-span-2 grid grid-cols-2 gap-2 md:gap-4">
                <div>
                  <Typography className="text-xs uppercase text-neutral-600">
                    {t("rank")}
                  </Typography>
                  <Chip
                    label={item.rank}
                    variant="outlined"
                    size="small"
                    className="mt-2 cursor-pointer uppercase"
                  />
                </div>
                <div>
                  <Typography className="text-xs uppercase text-neutral-600">
                    {t("rank_score")}
                  </Typography>
                  <Chip
                    label={Helper.formatNumber(item.rankScore)}
                    variant="outlined"
                    size="small"
                    className="mt-2 cursor-pointer uppercase"
                  />
                </div>
                <div>
                  <Typography className="text-xs uppercase text-neutral-600">
                    {t("played")}
                  </Typography>
                  <Chip
                    label={Helper.formatNumber(item.played)}
                    variant="outlined"
                    size="small"
                    className="mt-2 cursor-pointer uppercase"
                  />
                </div>
                <div>
                  <Typography className="text-xs uppercase text-neutral-600">
                    {t("winrate")}
                  </Typography>
                  <Chip
                    label={item.winrate}
                    variant="outlined"
                    size="small"
                    className="mt-2 cursor-pointer uppercase"
                  />
                </div>
              </div>
              <div className="col-span-4 flex flex-col items-center justify-between md:col-span-3 md:flex-row">
                <Image
                  className="mb-2 h-40 w-40 rounded-[15px] object-cover md:mb-0 md:mr-4"
                  src={item.image}
                  alt={item.name}
                  width={160}
                  height={160}
                />
                <div className="flex h-40 w-40 items-center justify-center rounded-[10px] border-[1px] border-solid border-neutral-700 ">
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 4
                    }}
                  >
                    {item.rank === "-" ? (
                      "-"
                    ) : (
                      <RankIcon
                        width={70}
                        height={70}
                        icon={item.rank}
                      />
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default memo(GameStatOverview)
