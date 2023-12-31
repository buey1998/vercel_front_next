import ButtonClose from "@components/atoms/button/ButtonClose"
import RocketIcon from "@components/icons/RocketIcon"
import { Drawer, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import React, { useEffect } from "react"
import useGetAllQuest from "@feature/quest/containers/hook/useGetAllQuest"
import useProfileStore from "@stores/profileStore"
import useQuestStore from "@stores/quest"
import useClaimQuestById from "@feature/quest/containers/hook/useClaimQuestById"
import { useToast } from "@feature/toast/containers"
import { useTranslation } from "react-i18next"
import MissionList from "./MissionList"
import MissionDetails from "./MissionDetails"

interface IProp {
  open: boolean
}

const useStyles = makeStyles({
  paper: {
    backgroundColor: "transparent",
    backgroundImage: "none",
    padding: "10px",
    maxWidth: "564px",
    width: "564px",
    border: "none",
    boxShadow: "none"
  }
})

const MissionComponent = ({ open }: IProp) => {
  const {
    data: questStore,
    setClose,
    missionType,
    setHasCompleted
  } = useQuestStore()
  const { profile } = useProfileStore()
  const { warnToast } = useToast()
  const { t } = useTranslation()

  const { dataAllQuest, refetchAllQuest } = useGetAllQuest(
    profile.data ? profile.data.id : ""
  )
  const { claimRespondData } = useClaimQuestById()

  useEffect(() => {
    let load = false

    if (!load) {
      if (claimRespondData) {
        refetchAllQuest()
      }
    }

    return () => {
      load = true
    }
  }, [claimRespondData, refetchAllQuest])

  const classes = useStyles()
  const mainCount = dataAllQuest?.data.filter(
    (filter) => filter.type === "main"
  ).length
  const dailyCount = dataAllQuest?.data.filter(
    (filter) => filter.type === "daily"
  ).length

  const handleClaimAll = () => warnToast("Claim all is not available yet")

  useEffect(() => {
    let load = false

    if (!load) {
      const checkIfHasClaimableQuest = dataAllQuest?.data.filter(
        (filter) =>
          filter.status === "done" &&
          filter.claim_reward_status === false &&
          filter.claim_reward_progress !== "claimed"
      )
      if (checkIfHasClaimableQuest && checkIfHasClaimableQuest.length > 0) {
        setHasCompleted(true)
      }
    }

    return () => {
      load = true
    }
  }, [dataAllQuest?.data, setHasCompleted])

  const renderElement = () =>
    !questStore ? (
      <MissionList
        value={missionType}
        mainCount={mainCount}
        dailyCount={dailyCount}
        dataAllQuest={dataAllQuest}
        handleClaimAll={handleClaimAll}
      />
    ) : (
      <MissionDetails />
    )

  return (
    <Drawer
      open={open}
      onClose={setClose}
      anchor="right"
      classes={{
        paper: classes.paper
      }}
      className="!min-w-[564px]"
    >
      <div className="z-[999991] flex h-full flex-col gap-5 rounded-md border-[3px] border-neutral-800 bg-neutral-900 p-4">
        {/* header */}
        <div className="flex min-h-[54px] items-center rounded-lg bg-neutral-800 pl-5">
          <div className="flex flex-1 flex-row items-center">
            <RocketIcon />
            <Typography className="pl-[15px] uppercase text-neutral-300">
              {t("mission")}
            </Typography>
          </div>
          <ButtonClose onClick={setClose} />
        </div>
        {/* tap */}
        {renderElement()}
      </div>
    </Drawer>
  )
}

export default MissionComponent
