/* eslint-disable jsx-a11y/label-has-associated-control */

import { Box, Checkbox, Typography } from "@mui/material"
import React, { memo } from "react"

interface IProp {
  value: boolean
  onHandle: (_event?: React.ChangeEvent<HTMLInputElement>) => void
  text?: string
  className?: string
  fontStyle?: string
  color?: "primary" | "secondary" | "error"
}
const CheckBoxNaka = ({
  value,
  onHandle,
  text,
  className,
  fontStyle = "text-sm text-neutral-500",
  color = "secondary"
}: IProp) => (
  <>
    <label className={`${className} flex`}>
      <Checkbox
        id={text}
        defaultChecked={value}
        onChange={(_event?: React.ChangeEvent<HTMLInputElement>) => {
          onHandle(_event)
        }}
        icon={
          <Box className=" h-[20px] w-[20px]  rounded-[6px] border-2 border-neutral-600  ">
            <Box className=" m-[2px] h-[12px] w-[12px]  rounded-[2px]  bg-neutral-700" />
          </Box>
        }
        color={color}
        checkedIcon={
          <Box
            className={` h-[20px] w-[20px]  rounded-[6px] border-2 ${
              color === "error" ? "border-error-main" : "border-neutral-600"
            }`}
          >
            <Box
              className={`m-[2px] h-[12px] w-[12px]  rounded-[2px]  ${
                color === "error" ? "bg-error-main" : "bg-secondary-main"
              }`}
            />
          </Box>
        }
      />
      <Typography className={`cursor-pointer font-neue-machina ${fontStyle}`}>
        {text ?? ""}
      </Typography>
    </label>
  </>
)
export default memo(CheckBoxNaka)
