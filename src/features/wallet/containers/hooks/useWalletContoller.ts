import { useWeb3Provider } from "@providers/index"
import Helper from "@utils/helper"
import { useToast } from "@feature/toast/containers"
import useContractVault from "@feature/contract/containers/hooks/useContractVault"
import CONFIGS from "@configs/index"
import useLoadingStore from "@stores/loading"
import useContractVaultBinance, {
  ITokenContract
} from "@feature/contract/containers/hooks/useContractVaultBinance"
import useProfileStore from "@stores/profileStore"
import { useCallback, useEffect, useState } from "react"
import useQueryBalanceVault from "@feature/contract/containers/hooks/useQuery/useQueryBalanceVault"
import {
  getBEP20Contract,
  getERC20Contract
} from "@feature/contract/containers/contractHelpers"
import { IErrorMessage } from "@interfaces/IErrorMessage"
import { CHAIN_SUPPORT, IChainList } from "@configs/chain"
import { IMessage } from "@feature/multichain/interfaces/IMultichain"
import useSupportedChain from "@hooks/useSupportedChain"
import useChainSupportStore from "@stores/chainSupport"
import useGlobal from "@hooks/useGlobal"
import { BigNumber } from "ethers"

export type Method = "deposit" | "withdraw"

const useWalletContoller = () => {
  // state
  const [tabChainList, setTabChainList] = useState<IChainList>(CHAIN_SUPPORT[0])
  const [isConnected, setIsConnected] = useState<boolean>(false)
  const [openWithDraw, setOpenWithDraw] = useState<boolean>(false)
  const [openDeposit, setOpenDeposit] = useState<boolean>(false)
  const [haveMetamask, sethaveMetamask] = useState(true)
  const [value, setValue] = useState<number | string>(0)
  const [disabled, setDisabled] = useState<boolean>(true)

  // Hooks
  const { allowNaka, depositNaka, withdrawNaka } = useContractVault()
  const { checkAllowToken, allowToken, depositToken, withdrawByToken } =
    useContractVaultBinance()
  const { toWei } = Helper
  const { setOpen, setClose } = useLoadingStore()
  const { profile } = useProfileStore()
  const { successToast, errorToast } = useToast()
  const { getTokenAddress } = useSupportedChain()
  const {
    address,
    handleConnectWithMetamask,
    signer,
    statusWalletConnected,
    setDisabledConnectButton
  } = useWeb3Provider()
  const { currentTokenSelected, currentChainSelected } = useChainSupportStore()
  const { fetchChainData } = useGlobal()

  const {
    refetchBalanceVaultBSC,
    refetchNakaBalanceVault,
    refetchBalanceWalletBSC,
    refetchNakaBalanceWallet
  } = useQueryBalanceVault(
    address || "",
    getTokenAddress(currentChainSelected as string) as string,
    isConnected
  )

  /**
   * @description Checking allowance token if token is not approved then approve
   * @param _allowanceToken - Amount current allowance token
   * @param _balance - Amount current balance
   * @returns
   */
  const isAllowance = (_currentAllowed: BigNumber): boolean => {
    const _inputAmount = BigNumber.from(toWei(value.toString()))

    const _currentAllowedNumber = Helper.BNToNumber(_currentAllowed.toString())
    const _inputAmountNumber = Helper.BNToNumber(_inputAmount.toString())

    if (_currentAllowed.toString() === "0") {
      return false
    }
    if (_currentAllowedNumber < _inputAmountNumber) {
      return false
    }
    return true
  }

  /**
   * @description Check metamask
   * @param _method
   */
  const handleOpen = (_method: Method, _chain: ITokenContract) => {
    if (address && profile) {
      if (_method === "deposit") setOpenDeposit(true)
      else if (_method === "withdraw") setOpenWithDraw(true)
    } else {
      errorToast("Please connect wallet")
    }
  }

  /**
   * @description Reset all balances
   */
  const onResetBalance = () => {
    refetchBalanceVaultBSC()
    refetchBalanceWalletBSC()
    refetchNakaBalanceVault()
    refetchNakaBalanceWallet()
  }

  /**
   * @description When close modal
   * @param _method
   */
  const handleClose = (_method: Method) => {
    if (_method === "deposit") setOpenDeposit(false)
    else if (_method === "withdraw") setOpenWithDraw(false)
    setValue(0)
  }

  /**
   * @description When connect wallet
   */
  const handleConnectWallet = async () => {
    if (profile.data && handleConnectWithMetamask) {
      handleConnectWithMetamask()
      if (setDisabledConnectButton && handleConnectWithMetamask) {
        setDisabledConnectButton(true)
        handleConnectWithMetamask()
        await fetchChainData()
      }
    } else {
      errorToast("Please login first")
    }
  }

  /**
   * @description handle deposit and withdraw
   * @param _chainId
   * @param _address
   * @returns
   */
  const handleDepisitByChainId = async (
    _chainId: string,
    _tokenAddress: string
  ) => {
    if (_chainId === CONFIGS.CHAIN.CHAIN_ID_HEX_BNB) {
      const resultDepositToken = await depositToken(
        _tokenAddress,
        toWei(value.toString()),
        value.toString() // Ex.0.0001
      )
      return resultDepositToken
    }
    const resultDepositNaka = await depositNaka(toWei(value.toString()))
    return resultDepositNaka
  }

  /**
   * @description handle deposit and withdraw
   * @param _chainId
   * @param _tokenAddress
   * @returns
   */
  const handleWithdrawByChainId = async (
    _chainId: string,
    _tokenAddress: string
  ) => {
    if (_chainId === CONFIGS.CHAIN.CHAIN_ID_HEX_BNB) {
      const resultWithdrawByToken = await withdrawByToken(
        _tokenAddress,
        toWei(value.toString())
      )
      return resultWithdrawByToken
    }
    const resultWithdrawNaka = await withdrawNaka(toWei(value.toString()))
    return resultWithdrawNaka
  }

  /**
   * @description handle deposit and withdraw
   * @param _method
   * @returns
   */
  const handleWalletProcess = async (
    _method: Method,
    _tokenAddress: string
  ) => {
    if (!address) return
    try {
      /* Sample loading wait for loading popup design */
      setOpen("Blockchain transaction in progress...")

      const res =
        _method === "deposit"
          ? await handleDepisitByChainId(
              currentChainSelected as string,
              _tokenAddress
            )
          : await handleWithdrawByChainId(
              currentChainSelected as string,
              _tokenAddress
            )

      /* Wait for transaction data */
      const resData = await res.wait()
      if (resData) {
        await fetchChainData()
        setClose()
        successToast("Transaction success")
        handleClose(_method)
      }
    } catch (error) {
      errorToast((error as IMessage).message)
      setClose()
    }
  }

  /**
   * @description handle check allowance
   * @param _method
   * @returns
   */
  const onSubmit = async (_method: Method) => {
    try {
      if (!address) {
        return
      }
      if (!currentTokenSelected) {
        return
      }

      if (currentChainSelected === CONFIGS.CHAIN.CHAIN_ID_HEX_BNB) {
        // ----- FOR BNB
        const bep20Contract = getBEP20Contract(
          currentTokenSelected.address,
          signer
        )
        if (
          currentTokenSelected.address !== CONFIGS.CONTRACT_ADDRESS.BNB_CONTRACT
        ) {
          const allowanceToken = await checkAllowToken(
            bep20Contract,
            CONFIGS.CONTRACT_ADDRESS.BALANCE_VAULT_BINANCE
          )
          // if ((allowanceToken as string).toString() === "0") {
          if (isAllowance(allowanceToken as BigNumber) === false) {
            allowToken(
              bep20Contract,
              // currentChainSelected.address, // spender
              currentTokenSelected.totolSupply as string
            ).then(async (_res) => {
              if (_res) {
                await successToast(_res as string)
                await handleWalletProcess(_method, currentTokenSelected.address)
              }
            })
          } else {
            await handleWalletProcess(_method, currentTokenSelected.address)
          }
        } else {
          await handleWalletProcess(_method, currentTokenSelected.address)
        }
      } else if (currentChainSelected === CONFIGS.CHAIN.CHAIN_ID_HEX) {
        // ----- FOR NAKA
        const erc20Contract = getERC20Contract(
          currentTokenSelected.address,
          signer
        )
        const allowanceToken = await checkAllowToken(
          erc20Contract,
          CONFIGS.CONTRACT_ADDRESS.BALANCE_VAULT
        )
        // const allowanceToken = await checkAllowNaka

        if (isAllowance(allowanceToken as BigNumber) === false) {
          allowNaka(currentTokenSelected.totolSupply as string).then(
            async (_res) => {
              await successToast(_res as string)
              if (_res) {
                await handleWalletProcess(_method, currentTokenSelected.address)
              }
            }
          )
        } else {
          handleWalletProcess(_method, currentTokenSelected.address)
        }
      }
    } catch (error) {
      errorToast(error as string)
    }
  }

  /**
   * @description Handle click max value
   * @param _balance
   */
  const onClickMaxValue = (_balance: number | string, _method?: Method) => {
    // Maybe no need to minus fee
    setValue(_balance)
    // if (_method === "deposit") {
    //   setValue(_balance)
    // } else {
    //   setValue(Number(_balance) - 0.00001)
    // }
    setDisabled(false)
  }

  const onChangeAmount = (
    inputValue: string | number,
    method: Method,
    tokenSelected: ITokenContract
  ) => {
    setValue(inputValue)

    if (inputValue === "" || Number(inputValue) === 0) {
      setDisabled(true)
    } else if (
      Number(inputValue) <=
      (method === "deposit"
        ? tokenSelected.balanceWallet.digit
        : tokenSelected.balanceVault.digit)
    ) {
      setDisabled(false)
    } else {
      onClickMaxValue(
        method === "deposit"
          ? tokenSelected.balanceWallet.digit
          : tokenSelected.balanceVault.digit,
        method
      )
    }
  }

  const checkConnection = useCallback(async () => {
    const { ethereum }: any = window
    if (ethereum) {
      sethaveMetamask(haveMetamask)
      if (address && address.length > 0) {
        setIsConnected(true)
      }
    } else {
      sethaveMetamask(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * @description Check metamask
   */
  useEffect(() => {
    let load = false

    if (!(statusWalletConnected as IErrorMessage).responseStatus) return
    if (signer === undefined || address === undefined) return
    if (!load) checkConnection()

    return () => {
      load = true
    }
  }, [address, haveMetamask, checkConnection, signer, statusWalletConnected])

  /**
   * @description Check Tab type
   */

  return {
    value,
    openWithDraw,
    openDeposit,
    disabled,
    setDisabled,
    setValue,
    handleOpen,
    handleClose,
    onSubmit,
    handleConnectWallet,
    isConnected,
    onClickMaxValue,
    onResetBalance,
    checkConnection,
    tabChainList,
    setTabChainList,
    onChangeAmount
  }
}

export default useWalletContoller
