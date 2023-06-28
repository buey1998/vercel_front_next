import SettingIconFilter from "@components/icons/Inventory/SettingIconFilter"
import { Box } from "@mui/material"
import React, { useState } from "react"
import { NextRouter, useRouter } from "next/router"
import { motion } from "framer-motion"
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded"
import FilterBox from "@feature/marketplace/components/molecules/FilterBox"

interface IProps {
  className?: string
}
const InventoryPage = ({ className }: IProps) => {
  const [open, setOpen] = useState(false)
  const router: NextRouter = useRouter()
  const isMapPage = router.asPath.includes("map")

  const animetionVariants = {
    hidden: {
      opacity: 0,
      ease: "easeOut",
      width: 0
    },
    shown: {
      opacity: 1,
      width: "276px"
    }
  }

  return (
    <div
      className={`hidden h-full border-l-[1px] border-l-neutral-700 sm:block ${className}`}
    >
      <div className="flex h-full">
        {open && (
          <motion.div
            variants={animetionVariants}
            initial="hidden"
            animate="shown"
            // transition={{ duration: 2, ease: "easeIn" }}
            className={`${
              isMapPage ? "!h-full" : "!h-fit"
            } bg-neutral-780 p-4 sm:h-full`}
          >
            <FilterBox />
          </motion.div>
        )}
        <Box
          component="div"
          // sx={{ backgroundColor }}
          className="grid h-[40px] w-[40px] cursor-pointer items-center justify-items-center rounded-r-lg bg-error-main"
          onClick={() => {
            if (open === false) {
              setOpen(true)
            }
            if (open === true) {
              setOpen(false)
            }
          }}
        >
          {open ? (
            <HighlightOffRoundedIcon sx={{ color: "#ffff" }} />
          ) : (
            <SettingIconFilter />
          )}
        </Box>
      </div>
    </div>
  )
}

export default InventoryPage
