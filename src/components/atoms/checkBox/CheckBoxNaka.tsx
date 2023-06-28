/* eslint-disable jsx-a11y/label-has-associated-control */

import { Box, Checkbox, Typography } from "@mui/material"
import React, { memo } from "react"
import { Image } from "@components/atoms/image"
import { useRouter } from "next/router"

interface IProp {
  value: boolean
  onHandle: (_event?: React.ChangeEvent<HTMLInputElement>) => void
  text?: string
  className?: string
  fontStyle?: string
  color?: "primary" | "secondary" | "error"
  img?: string
}
const CheckBoxNaka = ({
  value,
  onHandle,
  text,
  className,
  fontStyle = "text-sm text-neutral-500",
  color = "secondary",
  img = ""
}: IProp) => {
  const router = useRouter()
  return (
    <>
      <label className={`${className} flex cursor-pointer flex-row gap-x-2`}>
        <Checkbox
          id={text}
          checked={value}
          // defaultChecked={false}
          onChange={(_event?: React.ChangeEvent<HTMLInputElement>) => {
            onHandle(_event)
          }}
          icon={
            <Box
              component="div"
              className=" h-[20px] w-[20px]  rounded-[6px] border-2 border-neutral-600  "
            >
              <Box
                component="div"
                className=" m-[2px] h-[12px] w-[12px]  rounded-[2px]  bg-neutral-700"
              />
            </Box>
          }
          color={color}
          checkedIcon={
            <Box
              component="div"
              className={` h-[20px] w-[20px]  rounded-[6px] border-2 ${
                color === "error" ? "border-error-main" : "border-neutral-600"
              }`}
            >
              <Box
                component="div"
                className={`m-[2px] h-[12px] w-[12px]  rounded-[2px]  ${
                  color === "error" ? "bg-error-main" : "bg-secondary-main"
                }`}
              />
            </Box>
          }
        />
        {img && (
          <Image
            src={img}
            alt="icons"
            width={20}
            height={20}
            style={{ width: 20, height: 20 }}
            className={`mr-2 cursor-pointer object-cover ${
              router.asPath.includes("/building") && "scale-[1.5]"
            }`}
          />
        )}
        <Typography className={`cursor-pointer font-neue-machina ${fontStyle}`}>
          {text ?? ""}
        </Typography>
      </label>
    </>
  )
}
export default memo(CheckBoxNaka)
