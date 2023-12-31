import React, { memo, useState } from "react"
import {
  Box,
  ButtonGroup,
  InputAdornment,
  TextField,
  Typography,
  CircularProgress,
  Grid,
  Button
} from "@mui/material"
import LoginIcon from "@mui/icons-material/Login"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import LockOpenIcon from "@mui/icons-material/LockOpen"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined"
import { useForm } from "react-hook-form"
import ButtonLink from "@components/atoms/button/ButtonLink"
import ButtonIcon from "@components/atoms/button/ButtonIcon"
import FacebookIcon from "@components/icons/SocialIcon/FacebookIcon"
import TwitterIcon from "@components/icons/SocialIcon/TwitterIcon"
import GoogleIcon from "@components/icons/SocialIcon/GoogleIcon"
import MetaMarkIcon from "@components/icons/SocialIcon/Metamask"
import FacebookLogin from "react-facebook-login"
import useLoginTypeStore from "@stores/loginTypes"
import { useTranslation } from "react-i18next"
import { isMobile } from "@hooks/useGlobal"
// eslint-disable-next-line import/no-extraneous-dependencies
import { signIn, useSession } from "next-auth/react"
import FromForgotPassword from "./FromForgotPassword"
import useFormLoginController from "../containers/hooks/useFormLoginController"

const FormLogin = () => {
  const {
    facebookLogin,
    googleLogin,
    twitterLogin,
    metaMarkLogin,
    isLoading,
    onSubmitLogin,
    onError
  } = useFormLoginController()

  const { t } = useTranslation()
  const { data: session } = useSession()

  // console.log("session", session)

  const {
    getClickLoginFacebook: toggleFacebookLogin,
    setClickLoginFacebook: setToggleFacebookLogin
  } = useLoginTypeStore()

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const handleShowPassword = () => setShowPassword(!showPassword)

  const { register, handleSubmit } = useForm({
    defaultValues: {
      _email: "",
      _password: ""
    }
  })

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitLogin, onError)}>
        <Box component="div">
          <Typography className="mb-2 font-neue-machina text-sm uppercase  text-neutral-500">
            {t("email_address")}
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
            placeholder={`${t("email")}`}
            size="medium"
            autoComplete="email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon />
                </InputAdornment>
              )
            }}
          />
        </Box>
        <Box component="div">
          <Typography className="mb-2 mt-5 font-neue-machina text-sm uppercase text-neutral-500">
            {t("password")}
          </Typography>

          <TextField
            className="w-full"
            sx={{
              "& .MuiOutlinedInput-root": {
                width: "100%"
              }
            }}
            id="password-login"
            size="medium"
            {...register("_password")}
            type={showPassword ? "text" : "password"}
            placeholder={`${t("password")}`}
            helperText={t("helperText_login")}
            required
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOpenIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment
                  position="end"
                  className="cursor-pointer"
                >
                  {showPassword ? (
                    <VisibilityOutlinedIcon
                      onClick={() => handleShowPassword()}
                    />
                  ) : (
                    <VisibilityOffOutlinedIcon
                      onClick={() => handleShowPassword()}
                    />
                  )}
                </InputAdornment>
              )
            }}
          />
        </Box>

        <ButtonGroup className="mt-10 w-full gap-3 md:w-auto">
          <ButtonLink
            className="h-[40px] w-full !min-w-[150px]  text-sm md:w-auto"
            href="/register"
            text={t("register")}
            size="medium"
          />
          <ButtonLink
            icon={<LoginIcon />}
            size="medium"
            color="secondary"
            disabled={isLoading}
            className="h-[40px]  text-sm  md:!min-w-[200px]"
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
                  `${t("login")}`
                )}
              </>
            }
            type="submit"
            variant="contained"
          />
        </ButtonGroup>
      </form>
      <FromForgotPassword />
      <Button
        className="items-center justify-center rounded-[10px] bg-secondary-main p-4"
        onClick={() => signIn("discord")}
      >
        Login
      </Button>
      {/* )} */}
      {/* <>
            You&apos;re signed in! Congratulations! <br />
            <Button onClick={() => signOut()}>Sign out</Button>
          </> */}
      <div className="text-secondary-main">
        <h1>Welcome, {session?.user?.email}</h1>
        {/* <img
                src={session.user.image}
                alt="Profile Image"
              /> */}
      </div>
      <Grid
        item
        container
        justifyContent="space-between"
        alignItems="center"
        className="!mb-0 !mt-0"
      >
        <Grid item>
          <p className="text-xs uppercase">{t("or_join_us_with")}</p>
        </Grid>
        <Grid item>
          <hr className="w-[208px] border border-solid border-neutral-800" />
        </Grid>
      </Grid>
      <Grid
        item
        className="w-full"
        container
      >
        <div className="flex w-full flex-row flex-wrap justify-between gap-2">
          <ButtonIcon
            whileHover="hover"
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 4
            }}
            onClick={() => setToggleFacebookLogin(true)}
            icon={
              toggleFacebookLogin ? (
                <FacebookLogin
                  appId={`${process.env.NEXT_PUBLIC_FACEBOOK_APPID}`}
                  autoLoad
                  fields="name,email,picture"
                  callback={facebookLogin}
                  cssClass="my-facebook-button-class"
                  textButton={null}
                  icon={<FacebookIcon />}
                />
              ) : (
                <FacebookIcon />
              )
            }
            className={`flex h-[40px] w-[75px] justify-center rounded-lg border border-neutral-700 bg-neutral-800 ${
              toggleFacebookLogin ? "items-end" : "items-center"
            }`}
          />
          <ButtonIcon
            whileHover="hover"
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 4
            }}
            onClick={twitterLogin}
            icon={<TwitterIcon />}
            className="flex h-[40px] w-[75px] items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800"
          />
          <ButtonIcon
            whileHover="hover"
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 4
            }}
            onClick={googleLogin}
            icon={<GoogleIcon />}
            className="flex h-[40px] w-[75px] items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800"
          />
          {!isMobile && (
            <ButtonIcon
              whileHover="hover"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 4
              }}
              onClick={metaMarkLogin}
              icon={<MetaMarkIcon />}
              className="flex h-[40px] w-[75px] items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800"
            />
          )}
        </div>
      </Grid>
    </>
  )
}
export default memo(FormLogin)
