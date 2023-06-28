import React, { memo } from "react"
import { Chip } from "@mui/material"
import ButtonToggleIcon from "@components/molecules/gameSlide/ButtonToggleIcon"
import { useTranslation } from "next-i18next"
import CheckMarkIcon from "@components/icons/CheckMarkIcon"

interface IProps {
  disabled: boolean
  unread: number
  onHandleClick?: () => void
}
const Header = ({ unread, onHandleClick, disabled }: IProps) => {
  const { t } = useTranslation()
  return (
    <div className="mb-6 mt-4 flex flex-wrap justify-between md:mt-0 md:flex">
      <h1 className="flex-auto py-2 text-center text-2xl uppercase text-neutral-400 sm:mr-3 sm:flex-none sm:text-left">
        {t("notifications")}
      </h1>
      <div className="flex flex-auto flex-row gap-4 sm:flex-none">
        <Chip
          label={`${t("unread")} ${unread}`}
          size="small"
          color="error"
          className="my-2 font-bold uppercase "
        />
        <ButtonToggleIcon
          startIcon={<CheckMarkIcon />}
          text={t("mark_all_as_read")}
          handleClick={onHandleClick}
          className="border-sky-500 z-[2] rounded-full border border-solid text-[12px] capitalize md:w-[170px]"
          type="button"
          disabled={disabled}
        />
      </div>
    </div>
  )
}
export default memo(Header)
