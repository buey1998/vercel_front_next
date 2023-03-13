import React, { memo } from "react"
import MenuItem from "@mui/material/MenuItem"
// eslint-disable-next-line import/no-extraneous-dependencies
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state"
import {
  ListItemIcon,
  ListItemText,
  MenuList,
  Popover,
  Typography,
  Box
} from "@mui/material"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import ButtonClose from "../button/ButtonClose"

interface IProp {
  button: React.ReactNode
  title: string
  options: {
    label: string
    value: string
    icon?: string | React.ReactNode
    image?: React.ReactNode
    textEnd?: string
    link?: string
    handelClick?: () => void
  }[]
  imageSelectd?: React.ReactNode
  widthOption?: string
  left?: string
}
const SelectNaka = ({
  button,
  title,
  options,
  imageSelectd,
  widthOption = "auto",
  left
}: IProp) => {
  const { t } = useTranslation()
  const router = useRouter()
  return (
    <>
      <PopupState
        variant="popover"
        popupId="demo-popup-popover"
      >
        {(popupState) => (
          <div>
            <div {...bindTrigger(popupState)}>{button}</div>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
              sx={{
                "& .MuiPaper-root": {
                  borderRadius: "19px",
                  "@media only screen and (min-width: 768px)": {
                    width: widthOption,
                    marginLeft: left || "0px",
                    marginTop: "-7px"
                  }
                }
              }}
            >
              <div className="bg-primary-main p-[6px]">
                <div className="rounded-default bg-neutral-700 p-[3px]">
                  <div className="flex items-center justify-between">
                    <div className="m-[3px] w-full rounded-[8px] bg-primary-main px-4 py-[7px]">
                      <ListItemText>
                        <Typography className="overflow-hidden !truncate !font-neue-machina-semi !text-sm">
                          {t(`${title}`)}
                        </Typography>
                      </ListItemText>
                    </div>
                    <ButtonClose onClick={() => popupState.close()} />
                  </div>
                </div>
                <div className="flex items-center justify-between bg-primary-main pt-2 ">
                  <div className="flex w-full items-center  justify-between rounded-default bg-neutral-700 p-[3px]">
                    <MenuList className="w-full !p-[3px]">
                      {options.map((option) => (
                        <MenuItem
                          className={`${
                            router.pathname === option.link ? "active" : ""
                          } menu-select-naka !rounded-[8px] !p-[10px]`}
                          key={option.value}
                          onClick={() => {
                            popupState.close()
                            if (option.handelClick) {
                              option.handelClick()
                            } else if (option.link) {
                              router.push(option.link)
                            }
                          }}
                        >
                          <ListItemIcon className="!text-primary-contrastText ">
                            {option.icon}
                          </ListItemIcon>
                          <ListItemText className="w-50">
                            <Typography className="!font-neue-machina-semi !text-sm">
                              {option.label}
                            </Typography>
                          </ListItemText>
                          {option.textEnd && (
                            <Box
                              component="div"
                              className="w-max "
                            >
                              <ListItemText className="text-end-select-naka rounded-less border border-neutral-700 bg-primary-main py-[2px] px-2 text-center font-neue-machina-semi text-xs uppercase ">
                                <Typography className="uppercase text-primary-contrastText" />
                                {option.textEnd}
                              </ListItemText>
                            </Box>
                          )}
                        </MenuItem>
                      ))}
                    </MenuList>
                    <div className="py-1 px-2">{imageSelectd}</div>
                  </div>
                </div>
              </div>
            </Popover>
          </div>
        )}
      </PopupState>
    </>
  )
}
export default memo(SelectNaka)
