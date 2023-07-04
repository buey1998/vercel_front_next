import _ from "lodash"
import { MESSAGES } from "@constants/messages"
import { useToast } from "@feature/toast/containers"
import {
  TwitterAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup
} from "firebase/auth"
import { initializeApp, getApps } from "@firebase/app"
import useLoginProvider from "@feature/authentication/containers/hooks/useLoginProvider"
import { useForm } from "react-hook-form"
import { ISignIn } from "@feature/authentication/interfaces/IAuthService"
import { IError } from "@src/types/contract"
import useConnectMetamaskAction from "@utils/useConnectMetamesk"
import { useWeb3Provider } from "@providers/Web3Provider"
import Web3 from "web3"
import { useCallback } from "react"
import { IProfileFaceBook } from "@feature/profile/interfaces/IProfileService"
import { useLinkToFacebook } from "@feature/profile/containers/hook/useSyncProfileQuery"
import useProfileController from "@feature/profile/containers/hook/useProfileController"
import useSignIn from "./useSignIn"
import useLoginMetamask from "./useLoginMetamask"

export interface TFormData {
  email: string
  password: string
  confirmPassword: string
  code: number
  subscription: boolean
  referralId: string | string[]
}

const useFormLoginController = () => {
  const { mutateSignIn, isLoading } = useSignIn()
  const { mutateLoginProvider } = useLoginProvider()
  const { mutateLoginMetamask } = useLoginMetamask()
  const { successToast, errorToast } = useToast()

  const web3 = new Web3(Web3.givenProvider)
  const { address: account } = useWeb3Provider()
  const { getSignature } = useConnectMetamaskAction()
  const { mutateLinkToFacebook } = useLinkToFacebook()
  const { fetchProfile } = useProfileController()

  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_Id,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SEND_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
  }

  if (!getApps().length) {
    initializeApp(firebaseConfig)
  }

  const auth = getAuth()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      _email: "",
      _password: ""
    }
  })

  const onSubmitLogin = (_data: ISignIn) => {
    mutateSignIn({ _email: _data._email, _password: _data._password })
      .then((_profile) => {
        if (_profile) {
          successToast(MESSAGES.sign_in_success)
          // isMobile && router.push("/")
        }
      })
      .catch(() => {})
  }

  const onError = () => {
    errorToast(MESSAGES.please_fill)
  }

  const facebookLogin = useCallback(
    (response: IProfileFaceBook) => {
      if (
        response.email !== null &&
        response.email !== undefined &&
        response.userID !== null &&
        response.userID !== undefined
      ) {
        mutateLoginProvider({
          _email: response.email,
          _provider: "facebook",
          _prevPath: "/",
          _providerUUID: response.userID,
          _referral: ""
        })
          .then((_res) => {
            if (_res) {
              successToast(MESSAGES.logged_in_successfully)
              console.error("_res", _res)
              // Save user Facebook id to user's account
              mutateLinkToFacebook({
                player_id: _res.id,
                facebook_id: response.userID
              }).then((res) => {
                if (res.facebook_id) {
                  successToast(MESSAGES.sync_facebook_success)
                  // Fetch profile without reloading page
                  fetchProfile(_res, false)
                }
              })
            }
          })
          .catch((_error: IError) => {
            errorToast(MESSAGES.logged_in_unsuccessfully || _error.message)
          })
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [
      errorToast,
      mutateLoginProvider,
      successToast,
      mutateLinkToFacebook,
      fetchProfile
    ]
  )

  /**
   * @description Login with Google
   */
  const googleLogin = useCallback(async () => {
    const provider = new GoogleAuthProvider()
    provider.addScope("email")
    await signInWithPopup(auth, provider)
      .then((result) => {
        const { user } = result
        if (
          user.providerData[0].email !== null &&
          user.providerData[0].email !== undefined &&
          result.providerId !== null &&
          result.providerId !== undefined
        ) {
          mutateLoginProvider({
            _email: user.providerData[0].email,
            _provider: "google",
            _prevPath: "/",
            _providerUUID: user.uid,
            _referral: ""
          })
            .then((_res) => {
              if (_res) {
                successToast(MESSAGES.logged_in_successfully)
              }
            })
            .catch((_error: IError) => {
              errorToast(MESSAGES.logged_in_unsuccessfully || _error.message)
            })
        } else {
          errorToast(MESSAGES.logged_in_unsuccessfully)
        }
      })
      .catch((_error: IError) => {
        errorToast(MESSAGES.logged_in_unsuccessfully || _error.message)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorToast, mutateLoginProvider, successToast])

  /**
   * @description Login with Twitter
   */
  const twitterLogin = useCallback(async () => {
    const provider = new TwitterAuthProvider()
    provider.addScope("email")
    await signInWithPopup(auth, provider)
      .then((result) => {
        const { user } = result
        if (
          user.providerData[0].email !== null &&
          user.providerData[0].email !== undefined &&
          result.providerId !== null &&
          result.providerId !== undefined
        ) {
          mutateLoginProvider({
            _email: user.providerData[0].email,
            _provider: "google",
            _prevPath: "/",
            _providerUUID: user.uid,
            _referral: ""
          })
            .then((_res) => {
              if (_res) {
                successToast(MESSAGES.logged_in_successfully)
              }
            })
            .catch((_error: IError) => {
              errorToast(MESSAGES.logged_in_unsuccessfully || _error.message)
            })
        } else {
          errorToast(MESSAGES.logged_in_unsuccessfully)
        }
      })
      .catch((_error: IError) => {
        errorToast(MESSAGES.logged_in_unsuccessfully || _error.message)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorToast, mutateLoginProvider, successToast])

  /**
   * @description Login with Metamask
   */
  const metaMarkLogin = useCallback(async () => {
    let accounts: Array<string> = []
    try {
      await web3?.givenProvider?.request({ method: "eth_requestAccounts" })
      accounts = await web3.eth.getAccounts()
    } catch (_error) {
      errorToast(MESSAGES["please-connect-wallet"])
    }
    const valueSigner = await getSignature(account || accounts[0])
    if (
      ((typeof valueSigner === "string" || valueSigner instanceof String) &&
        account) ||
      accounts[0]
    ) {
      mutateLoginMetamask({
        _account: account,
        _accounts: accounts[0],
        _valueSigner: valueSigner
      })
        .then(async (_res) => {
          if (_res) {
            successToast(MESSAGES.logged_in_successfully)
          }
        })
        .catch((_error: IError) => {
          errorToast(MESSAGES.logged_in_unsuccessfully || _error.message)
        })
    } else {
      errorToast(MESSAGES["please-connect-wallet"])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, errorToast, mutateLoginMetamask, successToast])

  return {
    register,
    isLoading,
    onSubmitLogin,
    onError,
    handleSubmit,
    facebookLogin,
    googleLogin,
    twitterLogin,
    metaMarkLogin
  }
}

export default useFormLoginController
