import FacebookColorIcon from "@components/icons/SocialIcon/FacebookColorIcon"
import useSyncProfileController from "@mobile/features/profile/containers/useSyncProfileController"
import { Button } from "@mui/material"

const ButtonSyncFacebook = () => {
  const { handleClickedSyncFacebook } = useSyncProfileController()
  return (
    <Button
      variant="contained"
      className="mb-[1.125rem] h-[50px] w-[293px] rounded-2xl border border-solid border-neutral-690 !bg-neutral-800"
      onClick={handleClickedSyncFacebook}
    >
      <div className="flex items-center font-urbanist text-base font-medium">
        <span className="pr-2">
          <FacebookColorIcon />
        </span>
        <span>Sync Account with Facebook</span>
      </div>
    </Button>
  )
}

export default ButtonSyncFacebook
