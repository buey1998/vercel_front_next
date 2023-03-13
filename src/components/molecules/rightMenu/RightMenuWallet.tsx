import React, { memo } from "react"
import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography
} from "@mui/material"
import INaka from "@components/icons/Naka"
import AllIcon from "@components/icons/DepositWithdraw/AllIcon"
import Deposit from "@components/icons/DepositWithdraw/Deposit"
import IconArrowRight from "@components/icons/arrowRightIcon"
import Withdraw from "@components/icons/DepositWithdraw/WithDraw"
import { ITokenContract } from "@feature/contract/containers/hooks/useContractVaultBinance"
import { Method } from "@feature/wallet/containers/hooks/useWalletContoller"
import { ModalCustom } from "../Modal/ModalCustom"
import ButtonWallet from "./ButtonWallet"
import ModalHeader from "../Modal/ModalHeader"
import ButtonToggleIcon from "../gameSlide/ButtonToggleIcon"

interface IProp {
  method: Method
  title: string
  titleHeader: string
  open: boolean
  value: number
  disabled: boolean
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>
  setValue: React.Dispatch<React.SetStateAction<number>>
  handleOpen: (_chain: ITokenContract) => void
  handleClose: () => void
  onSubmit: (_method: "deposit" | "withdraw") => void
  onClickMaxValue: (_value: number) => void
  currentChainSelected: ITokenContract
}

const RightMenuWallet = ({
  method,
  title,
  titleHeader,
  open,
  value,
  disabled,
  setDisabled,
  setValue,
  handleOpen,
  handleClose,
  onSubmit,
  onClickMaxValue,
  currentChainSelected
}: IProp) => (
  <>
    <Box className="xs:flex-col items-center justify-between gap-1 lg:flex">
      <ButtonWallet
        title={title}
        handleButton={() => handleOpen(currentChainSelected)}
      />
    </Box>

    <ModalCustom
      open={open}
      onClose={handleClose}
      className="gap-3 rounded-[34px] p-[10px] md:min-w-[450px]"
      width={400}
    >
      {currentChainSelected &&
      currentChainSelected.balanceVault &&
      currentChainSelected.balanceWallet ? (
        <Stack
          spacing={3}
          className="md:p-5"
        >
          <div className="rounded-2xl border-[1px] border-neutral-700 bg-neutral-800 p-4 uppercase">
            <ModalHeader
              handleClose={handleClose}
              title={titleHeader}
            />
          </div>
          <Typography className="text-xs uppercase text-black-default">
            I want to {title}
          </Typography>

          <TextField
            className="w-full"
            required
            type="text"
            sx={{
              "& .MuiOutlinedInput-root": {
                width: "100%"
              }
            }}
            id="deposit-withdraw"
            placeholder="Enter amount"
            size="medium"
            // .replace(/^0+/, "")
            value={value}
            onChange={(e) => {
              const inputValue = e.target.value
              if (
                Number(inputValue) <=
                (method === "deposit"
                  ? currentChainSelected.balanceWallet.digit
                  : currentChainSelected.balanceVault.digit)
              ) {
                setValue(Number(inputValue))
                setDisabled(false)
              } else {
                onClickMaxValue(
                  method === "deposit"
                    ? currentChainSelected.balanceWallet.digit
                    : currentChainSelected.balanceVault.digit
                )
              }
            }}
            InputProps={{
              inputProps: { min: 0, max: currentChainSelected.balanceWallet },
              style: {
                fontSize: "14px",
                fontFamily: "neueMachina",
                color: "#70727B"
              },
              startAdornment: (
                <InputAdornment position="start">
                  <INaka color="#70727B" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment
                  position="end"
                  className="cursor-pointer"
                  onClick={() =>
                    onClickMaxValue(
                      method === "deposit"
                        ? currentChainSelected.balanceWallet.digit
                        : currentChainSelected.balanceVault.digit
                    )
                  }
                >
                  <AllIcon />
                </InputAdornment>
              )
            }}
          />
          <Typography className="text-xs uppercase text-neutral-600">
            {`your ${currentChainSelected.symbol} storage`} :
            <span className="text-secondary-main">
              {" "}
              {method === "deposit"
                ? currentChainSelected.balanceWallet.text
                : currentChainSelected.balanceVault.text}{" "}
              {currentChainSelected.symbol}
            </span>
          </Typography>
          {title === "withdraw" ? (
            <ButtonToggleIcon
              startIcon={<Withdraw />}
              text={title}
              handleClick={() => onSubmit("withdraw")}
              className="flex h-[50px] w-full items-center justify-center rounded-md bg-red-default font-neue-machina text-sm font-bold capitalize leading-3 text-neutral-900 disabled:bg-neutral-800 disabled:text-neutral-600"
              type="button"
              disabled={disabled}
            />
          ) : (
            <ButtonToggleIcon
              startIcon={<Deposit />}
              endIcon={<IconArrowRight stroke="#010101" />}
              text={title}
              handleClick={() => onSubmit("deposit")}
              className="flex h-[50px] w-full items-center justify-center rounded-md bg-varidian-default font-neue-machina text-sm font-bold capitalize leading-3 text-neutral-900 disabled:bg-neutral-800 disabled:text-neutral-600"
              type="button"
              disabled={disabled}
            />
          )}
        </Stack>
      ) : (
        <></>
      )}
    </ModalCustom>
  </>
)

export default memo(RightMenuWallet)
