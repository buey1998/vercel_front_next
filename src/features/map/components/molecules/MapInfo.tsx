import { Box } from "@mui/material"
import React from "react"
import ColorBoxElementInfo from "./ColorBoxElementInfo"

const MapInfo = () => (
  <Box
    component="div"
    className="menu-land-type absolute bottom-[15px] right-[15px] z-10 ml-5"
  >
    <Box
      component="div"
      sx={{
        borderRadius: "14px",
        width: "45px",
        height: "45px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          opacity: 1
        }
      }}
    >
      <ColorBoxElementInfo />
    </Box>
  </Box>
)

export default MapInfo
