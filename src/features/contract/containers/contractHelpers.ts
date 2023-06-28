import simpleRpcProvider from "@utils/web3"
import { ethers, ContractInterface } from "ethers"
import BalanceVaultAbi from "@configs/abi/BalanceVault.json"
import BinanceBalanceVaultAbi from "@configs/abi/BinanceBalanceVault.json"
import BEP20Abi from "@configs/abi/BEP20.json"
import ERC20Abi from "@configs/abi/ERC20.json"
import FlexibleStakingAbi from "@configs/abi/FlexibleStaking.json"
import InventoryVaultAbi from "@configs/abi/InventoryVault.json"
import ItemVaultAbi from "@configs/abi/ItemVault.json"
import P2PBinanceAbi from "@configs/abi/P2PBinance.json"
import P2PBinanceMumbaiAbi from "@configs/abi/P2PBinanceMumbai.json"
import P2PPolygonAbi from "@configs/abi/P2PPolygon.json"
import P2PPolygonMumbaiAbi from "@configs/abi/P2PPolygonMumbai.json"
import ShopAbi from "@configs/abi/Shop.json"
import StakingAbi from "@configs/abi/Staking.json"
import UserGameItemsAbi from "@configs/abi/UserGameItems.json"
import MaterialVault from "@configs/abi/MaterialVault.json"
// market
import MarketGameItem from "@configs/abi/marketplace/MarketGameItem.json"
import MarketMaterial from "@configs/abi/marketplace/MarketMaterial.json"
import MarketNFT from "@configs/abi/marketplace/MarketNFT.json"
import MarketNFTInstall from "@configs/abi/marketplace/MarketNFTInstallment.json"
import MarketNFTRent from "@configs/abi/marketplace/MarketNFTRenting.json"
// nft
import NFTArcGame from "@configs/abi/marketplace/NFTArcadeGame.json"
import NFTBuilding from "@configs/abi/marketplace/NFTBuilding.json"
import NFTLand from "@configs/abi/marketplace/NFTLand.json"
import NFTPunk from "@configs/abi/marketplace/NFTNakapunk.json"

import GetAllGameItem from "@configs/abi/GetAddressItems.json"
import GetAllLand from "@configs/abi/GetAllLandsOfAddress.json"

import ReefPaymentAbi from "@configs/abi/marketplace/ReefPayment.json"

import { Web3Provider } from "@ethersproject/providers"

export const getContract = (
  abi: ContractInterface,
  address: string,
  _provider?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => {
  const _web3 = _provider ?? simpleRpcProvider
  return new ethers.Contract(address, abi, _web3)
}

export const getBalanceVaultContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(BalanceVaultAbi.abi, address, web3)

export const getBalanceVaultBinanceContract = (
  address: string,
  web3?: Web3Provider | ethers.providers.JsonRpcSigner
) => getContract(BinanceBalanceVaultAbi.abi, address, web3)

export const getBEP20Contract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(BEP20Abi.abi, address, web3)

export const getERC20Contract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(ERC20Abi, address, web3)

export const getFlexibleStakingContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(FlexibleStakingAbi.abi, address, web3)

export const getInventoryVaultContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(InventoryVaultAbi.abi, address, web3)

export const getItemVaultContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(ItemVaultAbi.abi, address, web3)

export const getP2PBinanceContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(P2PBinanceAbi.abi, address, web3)

export const getP2PBinanceMumbaiContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(P2PBinanceMumbaiAbi.abi, address, web3)

export const getP2PPolygonContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(P2PPolygonAbi.abi, address, web3)

export const getP2PPolygonMumbaiContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(P2PPolygonMumbaiAbi.abi, address, web3)

export const getShopContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(ShopAbi.abi, address, web3)

export const getStakingContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(StakingAbi.abi, address, web3)

export const getUserGameItemsContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(UserGameItemsAbi.abi, address, web3)

export const getMaterialVaultContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(MaterialVault.abi, address, web3)

// Marketplace
export const getMarketGameItemContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(MarketGameItem.abi, address, web3)

export const getMarketMaterialContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(MarketMaterial.abi, address, web3)

export const getMarketNFTContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(MarketNFT.abi, address, web3)

export const getMarketNFTInstallContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(MarketNFTInstall.abi, address, web3)

export const getMarketNFTRentContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(MarketNFTRent.abi, address, web3)

// nft
export const getNFTArcGameContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(NFTArcGame.abi, address, web3)

export const getNFTBuildingContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(NFTBuilding.abi, address, web3)

export const getNFTLandContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(NFTLand.abi, address, web3)

export const getNFTPunkContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(NFTPunk.abi, address, web3)

export const getAllGameItemContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(GetAllGameItem.abi, address, web3)

export const getAllLandContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(GetAllLand.abi, address, web3)

export const getReefPaymentContract = (
  address: string,
  web3?:
    | Web3Provider
    | ethers.providers.JsonRpcProvider
    | ethers.providers.JsonRpcSigner
) => getContract(ReefPaymentAbi.abi, address, web3)
