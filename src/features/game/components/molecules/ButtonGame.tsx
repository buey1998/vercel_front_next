import { Box, Typography } from "@mui/material"
import { memo } from "react"
import Ellipse from "@components/icons/Ellipse/Ellipse"
import { useRouter } from "next/router"
import ButtonPlayer from "@feature/game/components/atoms/ButtonPlayer"
import { isMobile } from "@hooks/useGlobal"

interface IProp {
  description?: string
  textButton: string
  url: string
  fillIcon?: string
  classCssButton?: string
  onClick?: () => void
}
const ButtonGame = ({
  description,
  textButton,
  url,
  fillIcon = "#A0ED61",
  classCssButton = "btn-green-rainbow bg-green-lemon text-primary-main ",
  onClick
}: IProp) => {
  const router = useRouter()
  return (
    <>
      <Box
        component="div"
        className="w-fit items-center justify-center gap-3 rounded-[50px] border border-neutral-800 bg-primary-main  p-3 text-neutral-300 md:flex"
      >
        {description && (
          <Typography className="mx-4 text-default">{description}</Typography>
        )}
        <ButtonPlayer
          startIcon={<Ellipse fill={fillIcon} />}
          handleClick={() => {
            if (onClick) {
              onClick()
            } else {
              router.push(`${url}`)
            }
          }}
          text={
            <Typography
              className={`w-full font-neue-machina uppercase text-primary-main ${
                isMobile ? "text-sm" : "text-2xl"
              }`}
            >
              {textButton}
            </Typography>
          }
          // className={`h-[60px] w-[194px] rounded-[50px] ${classCssButton} font-bold capitalize`}
          className={`rounded-[50px] ${classCssButton} font-bold capitalize ${
            isMobile ? "h-[44px] w-[130px]" : "h-[60px] w-[194px]"
          }`}
        />
      </Box>
    </>
  )
}
export default memo(ButtonGame)
