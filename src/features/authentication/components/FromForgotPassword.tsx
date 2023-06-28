import React, { memo, useState } from "react"
import { ModalCustom } from "@components/molecules/Modal/ModalCustom"
import ModalHeader from "@components/molecules/Modal/ModalHeader"
import {
  Box,
  CircularProgress,
  InputAdornment,
  Stack,
  TextField,
  Typography
} from "@mui/material"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import { useToast } from "@feature/toast/containers"
import { useForm } from "react-hook-form"
import { MESSAGES } from "@constants/messages"
import { useTranslation } from "react-i18next"
import ButtonLink from "@components/atoms/button/ButtonLink"
import { isMobile } from "@hooks/useGlobal"
import ButtonToggleIcon from "@components/molecules/gameSlide/ButtonToggleIcon"
import IconArrowRight from "@components/icons/arrowRightIcon"
import useResetPassword from "../containers/hooks/useResetPassword"

const FromForgotPassword = () => {
  const [open, setOpen] = useState<boolean>(false)
  const { t } = useTranslation()

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const { errorToast, successToast } = useToast()
  const { register, handleSubmit } = useForm({
    defaultValues: {
      _email: ""
    }
  })
  const { mutateForgotPassword, isLoading } = useResetPassword()

  const onSubmit = (data) => {
    mutateForgotPassword(data._email)
      .then((_data) => {
        if (_data && _data.status) {
          successToast(MESSAGES.reset_password_success)
          handleClose()
        }
      })
      .catch((_error) => {
        errorToast(_error.data.message)
      })
  }
  const onError = () => {
    errorToast(MESSAGES.please_fill)
  }

  return (
    <>
      {isMobile ? (
        <Box
          component="div"
          className="flex justify-center text-center"
          onClick={handleOpen}
        >
          <Typography className="text-lg font-bold text-warning-100">
            {t("forgot_password")}
          </Typography>
        </Box>
      ) : (
        <Typography
          className="cursor-pointer text-right text-sm text-neutral-500"
          onClick={handleOpen}
        >
          {t("forgot_password")}
        </Typography>
      )}
      <Box
        component="div"
        className="m-auto w-max p-1"
      >
        <Box
          component="div"
          className="xs:flex-col items-center justify-between gap-1 lg:flex"
        >
          {/* <ButtonLogin handleButton={handleOpen} /> */}
        </Box>
        <ModalCustom
          open={open}
          onClose={handleClose}
          className="w-auto gap-3 rounded-[34px] p-[10px]"
          width={400}
        >
          <Stack
            spacing={3}
            className="md:p-5"
          >
            <ModalHeader
              handleClose={handleClose}
              title="Forget Password"
            />
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <Box component="div">
                <Typography className="mb-2 font-neue-machina text-sm uppercase  text-neutral-500">
                  Email Address
                </Typography>
                <TextField
                  className="w-full"
                  required
                  type="email"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      width: "100%"
                    }
                  }}
                  {...register("_email")}
                  id="email-login"
                  placeholder="Email"
                  size="medium"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon />
                      </InputAdornment>
                    )
                  }}
                />
                <Box
                  component="div"
                  className="mt-8 flex justify-center"
                >
                  <ButtonToggleIcon
                    type="button"
                    className="border border-solid border-neutral-700 bg-transparent font-bold text-white-default !no-underline"
                    text="Back"
                    startIcon={null}
                    handleClick={handleClose}
                    endIcon={<IconArrowRight stroke="#fff" />}
                    style={{ borderRadius: "24px 0px 0px 24px" }}
                  />
                  <ButtonLink
                    icon={<></>}
                    size="medium"
                    color="secondary"
                    disabled={isLoading}
                    className="min-w-auto h-[40px]  text-sm"
                    sxCustomStyled={{ borderRadius: "0px 24px 24px 0px" }}
                    href=""
                    onClick={() => {}}
                    text={
                      <>
                        {isLoading ? (
                          <CircularProgress
                            color="primary"
                            className="ml-4"
                            size={20}
                          />
                        ) : (
                          "Reset Password"
                        )}
                      </>
                    }
                    type="submit"
                    variant="contained"
                  />
                </Box>
              </Box>
            </form>
          </Stack>
        </ModalCustom>
      </Box>
    </>
  )
}

export default memo(FromForgotPassword)
