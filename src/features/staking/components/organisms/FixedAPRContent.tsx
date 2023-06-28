/* eslint-disable no-unused-vars */
import useGlobalStaking from "@feature/staking/containers/hook/useStakingController"
import useGlobal from "@hooks/useGlobal"
import { Box, Typography } from "@mui/material"
import dayjs from "dayjs"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { v4 as uuid } from "uuid"
import StakingTitle from "../atoms/StakingTitle"
import RedBanner from "./RedBanner"
import StakingDetails from "./StakingDetails"

const FixedAPRContent = () => {
  const [stakingStatus, setStakingStatus] = useState<boolean | undefined>(false)
  const fetchRef = useRef(false)
  const router = useRouter()
  const { slug } = router.query
  const { fixedStaking, flexibleStaking, fetchStakingInfo, userStakedInfo } =
    useGlobalStaking()
  const { t } = useTranslation()
  const { hydrated } = useGlobal()

  // State
  // const [open, setOpen] = useState<boolean>(true)
  // const handleOpen = () => setOpen(true)
  // const handleClose = () => setOpen(false)

  /**
   * @description find staking data by slug
   */
  const stakingData =
    fixedStaking.find(
      (item) =>
        dayjs(item.datetime)
          .format("DD MMM YYYY")
          .split(" ")
          .join("-")
          .toLocaleLowerCase() === slug
    ) ||
    flexibleStaking.find(
      (item) =>
        dayjs(item.datetime)
          .format("DD MMM YYYY")
          .split(" ")
          .join("-")
          .toLocaleLowerCase() === slug
    )

  useEffect(() => {
    let load = false

    if (!load) {
      if (!fetchRef.current && stakingData) {
        setStakingStatus(
          stakingData.dataAPI.some((item) => {
            fetchStakingInfo(item.contract_address, item.type)
            return userStakedInfo?.comInterest && userStakedInfo.stakeAmount
          })
        )
      }
      fetchRef.current = true
    }

    return () => {
      load = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stakingData])

  return (
    <section className="relative w-full overflow-hidden">
      {hydrated && (
        // <RedBanner
        //   message={`Fixed ${t("staking_earn_up_to")} 25% APR`}
        //   className="mb-12"
        // />
        <div>
          <RedBanner
            message={`${t("staking_not_available")}`}
            className="mb-12"
          />
          <Typography className="mb-12 flex max-w-full justify-center text-center font-bold uppercase text-neutral-500">
            {t("staking_not_avaliable_desc")}
          </Typography>
        </div>
      )}

      {stakingData && (
        <Box component="section">
          {stakingData.dataAPI.map((item) => (
            <div key={uuid()}>
              <StakingTitle title={`${item.title}`} />
              {/* <StakingPeriodDate
                days={item.period}
                type={item.type}
                datetime={stakingData.datetime}
                className="mb-4"
                lockStatus={
                  dayjs().unix() > dayjs(stakingData.datetime).unix()
                    ? "locked"
                    : "available"
                }
              /> */}
              <StakingDetails
                dataStaking={item}
                className="mb-10"
                // handleOpen={handleOpen}
              />
            </div>
          ))}
        </Box>
      )}
      {/* <StakingModal
        open={open}
        handleClose={handleClose}
      /> */}
    </section>
  )
}

export default FixedAPRContent
