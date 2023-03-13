import React from "react"
import { Image } from "@components/atoms/image"
import ILogoMaster from "@components/icons/LogoMaster"
import IMetaMask from "@components/icons/MetaMask"
import { IMAGES } from "@constants/images"

interface IWalletFooterProps {
  address?: string
}
const WalletFooter = ({ address }: IWalletFooterProps) => (
  <div className="mt-6 grid w-full grid-cols-12 gap-2">
    <div className="col-span-7 rounded-xl border-2 border-black-800 text-center ">
      <p className="pt-1 uppercase text-black-800">NAKA storage model:S</p>
    </div>
    <div className="col-span-5 flex  h-[35px] content-center items-center justify-between rounded-[6px] bg-black-100 px-0.5 py-2 ">
      <div className=" border-1 mr-1 rounded-[5px] bg-neutral-800 py-2 px-0.5 ">
        <ILogoMaster
          width="25"
          height="12"
        />
      </div>
      <div className="">
        {address ? (
          <div
            className="wavy-line wavy-line-green"
            data-text="'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''"
          />
        ) : (
          <div
            className="wavy-line-DS wavy-line-DS"
            data-text="''''''''''''''''''''''''''''''''''''''''''''"
          />
        )}
      </div>
      <div className="border-1 ml-1 rounded-[5px] bg-neutral-800 p-0.5">
        {address ? (
          <IMetaMask
            width="25"
            height="25"
          />
        ) : (
          <Image
            src={IMAGES.MetaMaskds.src}
            alt=""
            width={35}
            height={35}
          />
        )}
      </div>
    </div>
  </div>
)

export default WalletFooter
