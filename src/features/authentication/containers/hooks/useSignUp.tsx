import { IProfile } from "@feature/profile/interfaces/IProfileService"
import useProfileStore from "@stores/profileStore"
import { useMutation } from "@tanstack/react-query"
import useDrawerControllerMobileStore from "@stores/drawerControllerMobile"
import { signUp } from "../services/auth.service"

const useSignUp = () => {
  const { onSetProfileData, onSetProfileAddress, onSetProfileJWT } =
    useProfileStore()
  const { setOpenProfileCreate: setToggleProfileCreate } =
    useDrawerControllerMobileStore()

  const {
    data: _profile,
    error,
    isLoading,
    isError,
    mutateAsync: mutateSignUp
  } = useMutation(signUp, {
    mutationKey: ["signUp"],
    retry: false,
    onSuccess(res) {
      if (res) {
        onSetProfileData(res as IProfile)
        onSetProfileAddress("")
        onSetProfileJWT((res as IProfile).jwtToken)
        setToggleProfileCreate(true)
      }
    }
  })

  return {
    _profile,
    error,
    isLoading,
    isError,
    mutateSignUp
  }
}

export default useSignUp
