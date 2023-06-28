import React from "react"
import { Box, SwipeableDrawer } from "@mui/material"
import ArrowBackIcon from "@mobile/components/atoms/icons/ArrowBackIcon"
import useEarnRewardController from "@feature/earnReward/containers/hooks/useEarnRewardController"
import { StyleDrawer } from "@mobile/styles/muiStyleMobile"
import useDrawerControllerMobile from "@mobile/features/game/containers/hooks/useDrawerControllerMobile"
import useGlobalControllerMobile from "@mobile/features/game/containers/hooks/useGlobalControllerMobile"
import EarnRewardListMobile from "../EarnRewardListMobile"

interface IEarnRewardModalProps {
  open: boolean
  setOpenReward: React.Dispatch<React.SetStateAction<boolean>>
}

const EarnRewardModal = ({ open, setOpenReward }: IEarnRewardModalProps) => {
  const { clearAllDrawer } = useDrawerControllerMobile()
  const { isLoadingReward, earnReward } = useEarnRewardController()
  const { limit } = useGlobalControllerMobile()

  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={() => setOpenReward(false)}
      onOpen={() => {
        clearAllDrawer()
        setOpenReward(true)
      }}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true
      }}
      sx={StyleDrawer}
    >
      <Box
        component="div"
        className="notification-list flex flex-col p-[8px_24px_36px]"
        sx={{
          "h2": {
            lineHeight: "1",
            alignItems: "flex-start"
          }
        }}
      >
        <h2
          className="flex items-center gap-4 py-[30px] font-urbanist text-[24px] font-bold text-white-primary"
          onClick={() => setOpenReward(false)}
          aria-hidden="true"
        >
          <ArrowBackIcon />
          Item Rewards
        </h2>
        <EarnRewardListMobile
          earnReward={earnReward || []}
          loading={isLoadingReward}
          limit={limit}
        />
      </Box>
    </SwipeableDrawer>
  )
}

export default EarnRewardModal
