import ButtonIcon from "@components/atoms/button/ButtonIcon"
import { MESSAGES } from "@constants/messages"
import Helper from "@utils/helper"
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded"
import { useToast } from "@feature/toast/containers"

interface IWalletAddressProps {
  contractAddress: string
}

const WalletAddress = ({ contractAddress }: IWalletAddressProps) => {
  const { successToast } = useToast()
  return (
    <div className="flex items-center text-base text-neutral-600">
      <span className="mx-2 inline-block rounded-sm">
        {Helper.shortenString(contractAddress)}
      </span>
      <ButtonIcon
        onClick={() => {
          Helper.copyClipboard(contractAddress)
          successToast(MESSAGES.copy)
        }}
        className="m-1 flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800"
        icon={<ContentCopyRoundedIcon />}
      />
    </div>
  )
}

export default WalletAddress
