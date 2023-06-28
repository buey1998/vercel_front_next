import { CardContent, SxProps, Theme } from "@mui/material"
import useProfileStore from "@stores/profileStore"
import Metamask from "@components/atoms/metamask"
import ButtonLink from "@components/atoms/button/ButtonLink"
import { useTranslation } from "react-i18next"
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"
import { useWeb3Provider } from "@providers/index"
import useGlobal from "@hooks/useGlobal"
import { ITokenContract } from "@feature/contract/containers/hooks/useContractVaultBinance"
import { CHAIN_SUPPORT, IChainList } from "@configs/chain"
import INaka from "@components/icons/Naka"
import IBusd from "@components/icons/Busd"
import useChainSupportStore from "@stores/chainSupport"
import useWalletContoller from "@feature/wallet/containers/hooks/useWalletContoller"
import TokenList from "../TokenList"
import TokenListItem from "../TokenListItem"

interface IProps {
  token?: string | undefined
  variant?: "naka" | "busd" | "vault" | string | undefined
  tokenUnit?: "naka" | "busd" | "vault" | string | undefined
  className?: string | undefined
  sx?: SxProps<Theme> | undefined
  buyItemCoinSeleced?: ITokenContract
  widthBalance?: string
}

const Balance = ({
  className,
  buyItemCoinSeleced,
  widthBalance = "w-[40px]"
}: IProps) => {
  const profile = useProfileStore((state) => state.profile.data)
  const { address, hasMetamask, isConnected, disabledConnectButton } =
    useWeb3Provider()
  const { t } = useTranslation()
  const { chainSupport, currentTokenSelected, currentChainSelected } =
    useChainSupportStore()
  const { hydrated } = useGlobal()
  const { handleConnectWallet } = useWalletContoller()

  // const handleClickConnectWallet = async () => {
  //   if (setDisabledConnectButton && handleConnectWithMetamask) {
  //     setDisabledConnectButton(true)
  //     handleConnectWithMetamask()
  //     await fetchChainData()
  //   }
  // }

  /**
   * @description Handle display balances from balance vault
   * @returns
   */
  const handleDisplayBalance = () => {
    if (buyItemCoinSeleced) {
      const selectedCoin = chainSupport.find(
        (coin) => coin.symbol === buyItemCoinSeleced.symbol
      )

      if (selectedCoin) {
        return (
          <TokenListItem
            icon={
              (selectedCoin as ITokenContract).symbol === "NAKA" ? (
                <INaka />
              ) : (
                <IBusd />
              )
            }
            text={(selectedCoin as ITokenContract).balanceVault.text}
            disabledClick
            widthBalance={widthBalance}
            shadow
          />
        )
      }
      return <></>
    }
    return (
      <TokenList
        dataList={chainSupport}
        currentTabChainSelected={
          CHAIN_SUPPORT.find(
            (item) => item.chainId === currentChainSelected
          ) as IChainList
        }
        currentTokenSelected={
          currentTokenSelected?.symbol || chainSupport[0]?.symbol
        }
        displayBalance
        widthBalance={widthBalance}
      />
    )
  }

  return hydrated ? (
    <div>
      {isConnected && address && profile && currentChainSelected ? (
        <CardContent
          className={`!my-2 min-w-[200px] items-center justify-center !p-0 ${className}`}
        >
          {handleDisplayBalance()}
        </CardContent>
      ) : (
        <div className="my-4">
          {profile && (
            <ButtonLink
              onClick={handleConnectWallet}
              text={t("Connect Wallet")}
              icon={<AccountBalanceWalletIcon />}
              size="medium"
              color="secondary"
              variant="contained"
              className="min-h-[57px] w-full"
              disabled={disabledConnectButton}
            />
          )}
          {!hasMetamask && profile && <Metamask />}
        </div>
      )}
    </div>
  ) : (
    <></>
  )
}

export default Balance
