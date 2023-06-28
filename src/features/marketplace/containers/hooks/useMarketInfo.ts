import useGetMarketOrder from "@feature/marketplace/hooks/getMarketOrder"
import {
  IMarketDetail,
  IMarketOrderListServ,
  IMarketSearch,
  IMarketServForm,
  IMarketSort,
  TNFTType,
  TSellingType,
  TType
} from "@feature/marketplace/interfaces/IMarketService"
import useGlobal from "@hooks/useGlobal"
import useMarketFilterStore from "@stores/marketFilter"
import { useRouter } from "next/router"
import Helper from "@utils/helper"
import { useCallback, useEffect, useMemo, useState } from "react"

const useMarketInfo = () => {
  const [orderData, setOrderData] = useState<IMarketOrderListServ | undefined>(
    undefined
  )

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalCount, setTotalCount] = useState<number>(0)

  const { convertNFTTypeToUrl, getValueFromTKey, convertNFTTypeToTType } =
    Helper
  const router = useRouter()
  const { marketType } = useGlobal()
  const { getMarketOrderAsnyc, isLoading } = useGetMarketOrder()
  const [limit, setLimit] = useState<number>(20)
  const [cardType, setCardType] = useState<TType>("land")
  const { sort, search, filterType } = useMarketFilterStore()
  const sellerType = router.pathname.includes("p2p") ? "user" : "system"
  const [NFTType, setNFTType] = useState<TNFTType | undefined>(undefined)

  const handleImage = (_data: IMarketDetail) => {
    if (NFTType === "game_item" && _data.item_data) {
      return {
        src: _data.item_data.image,
        alt: _data.item_data.name,
        width: _data.item_data.name.includes("Bullet") ? 40 : 100
      }
    }
    if (NFTType === "nft_building" && _data.building_data) {
      return {
        src: _data.building_data.NFT_image,
        alt: _data.building_data.name,
        width: 500,
        height: 500
      }
    }
    if (NFTType === "nft_material" && _data.material_data) {
      return {
        src: _data.material_data.image,
        alt: _data.material_data.name,
        width: 200,
        height: 200
      }
    }
    if (NFTType === "nft_naka_punk" && _data.nakapunk_data) {
      return {
        src: _data.nakapunk_data.image,
        alt: _data.nakapunk_data.name,
        width: 200,
        height: 200
      }
    }
    if (NFTType === "nft_game" && _data.game_data) {
      return {
        src: _data.game_data.image_nft_arcade_game,
        alt: _data.game_data.name,
        width: 200,
        height: 200
      }
    }
  }

  const fetchOrderList = useCallback(async () => {
    // const search = await handleSearch()
    if (filterType && search && sort && NFTType && sellerType) {
      setCardType(convertNFTTypeToTType(NFTType) || "land")
      let __search: IMarketSearch = {
        type_marketplace: NFTType,
        selling_type: getValueFromTKey(search, "selling_type") as TSellingType,
        seller_id: getValueFromTKey(search, "seller_id") as string,
        nft_token: getValueFromTKey(search, "nft_token") as string
      }
      const __sort: IMarketSort = {
        created_at:
          sort.length > 0
            ? (getValueFromTKey(sort, "created_at") as number)
            : undefined,
        price:
          sort.length > 0
            ? (getValueFromTKey(sort, "price") as number)
            : undefined
      }
      switch (NFTType) {
        case "nft_land":
          __search = {
            ...__search,
            type_land:
              filterType.nft_land.length > 0 ? filterType.nft_land : undefined,
            seller_type: sellerType
          }
          break
        case "nft_building":
          __search = {
            ...__search,
            type_building:
              filterType.nft_building.length > 0
                ? filterType.nft_building
                : undefined,
            seller_type: sellerType
          }
          break
        case "game_item":
          __search = {
            ...__search,
            item_id:
              filterType.game_item.length > 0
                ? filterType.game_item
                : undefined,
            seller_type: sellerType
          }
          break
        case "nft_material":
          __search = {
            ...__search,
            type_material:
              filterType.nft_material.length > 0
                ? filterType.nft_material
                : undefined,
            seller_type: sellerType
          }
          break
        default:
          break
      }
      await getMarketOrderAsnyc({
        _urlNFT: convertNFTTypeToUrl(NFTType as TNFTType),
        _limit: limit,
        _page: currentPage,
        _search: __search,
        _sort: __sort
      } as IMarketServForm).then((_res) => {
        setOrderData(_res)
        setTotalCount(_res.info.totalCount)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterType, search, sort, NFTType, limit, currentPage, sellerType])

  useEffect(() => {
    let load = false
    if (!load) fetchOrderList()
    return () => {
      load = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchOrderList])

  useEffect(() => {
    let cleanup = false
    if (!cleanup && marketType) {
      setNFTType(marketType)
    }
    return () => {
      cleanup = true
    }
  }, [marketType])

  useMemo(() => {
    let cleanup = false
    if (!cleanup && NFTType) {
      setCurrentPage(1)
    }
    return () => {
      cleanup = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [NFTType])

  return {
    orderData,
    isLoading,
    totalCount,
    currentPage,
    limit,
    type: cardType,
    setLimit,
    handleImage,
    setCurrentPage
  }
}

export default useMarketInfo
