import { IMenu } from "@interfaces/IMenu"
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material"
import React from "react"
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined"
import { useRouter } from "next/router"

interface IProp extends IMenu {
  active?: boolean
  endIcon?: boolean
  icon: string | React.ReactElement
  onClick?: () => void
  endText?: string | React.ReactElement
}

/**
 * @description In case use more type please add type in array prop
 */

const MenuItemCustom = ({
  active,
  endIcon,
  icon,
  onClick,
  endText,
  ...props
}: IProp) => {
  const router = useRouter()
  return (
    <MenuItem
      key={props.id}
      aria-label={props.id}
      onClick={() => {
        if (props.href && props.href !== "") {
          router.push(props.href)
        } else if (onClick) {
          onClick()
        }
      }}
      sx={{
        color: active ? "#E1E2E2" : null,
        backgroundColor: active ? "#010101" : null
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <div className="flex w-full items-center justify-between">
        <ListItemText className="w-full">{props.label}</ListItemText>
        <ListItemText className="mr-3">{endText}</ListItemText>
      </div>
      {endIcon && <ArrowOutwardOutlinedIcon sx={{ height: 14 }} />}
    </MenuItem>
  )
}

export default MenuItemCustom
