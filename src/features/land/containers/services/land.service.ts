import services from "@configs/axiosGlobalConfig"
import {
  IMarketServForm,
  INFTTransferServ
} from "@feature/marketplace/interfaces/IMarketService"
import {
  IAllLand,
  IMarketLandData,
  ILandServ,
  IMyLandListServ,
  IRedeemServ,
  IMyLandRentalListServ
} from "@feature/land/interfaces/ILandService"

// this service must be improve for transfer land owner
export const getMyLand = ({
  _limit,
  _page,
  _search,
  _sort,
  _landList = [],
  _txHash
}: IMarketServForm & { _landList: string[]; _txHash?: string }) =>
  new Promise<IMyLandListServ>((resolve, reject) => {
    const data = {
      limit: _limit,
      skip: _page,
      search: _search,
      sort: _sort,
      land_id_arr: _landList,
      transaction_hash: _txHash
    }
    services
      .post<IMyLandListServ>(`/nakaverse-land/lands-owner`, { ...data })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  })

export const getLandById = ({ _id }: { _id: string }) =>
  new Promise<IMarketLandData>((resolve, reject) => {
    services
      .get<IMarketLandData>(`/nakaverse-land/lands-datas/${_id}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  })

export const getMyForSaleLand = ({
  _limit,
  _page,
  _search,
  _sort
}: IMarketServForm) =>
  new Promise<IMyLandListServ>((resolve, reject) => {
    const data = {
      limit: _limit,
      skip: _page,
      search: _search,
      sort: _sort
    }
    services
      .post<IMyLandListServ>(`/nakaverse-land/lands-owner-on-sale`, { ...data })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  })

export const getMyRentOutLand = ({
  _limit,
  _page,
  _search,
  _sort
}: IMarketServForm) =>
  new Promise<IMyLandRentalListServ>((resolve, reject) => {
    const data = {
      limit: _limit,
      skip: _page,
      search: _search,
      sort: _sort
    }
    services
      .post<IMyLandRentalListServ>(`/nakaverse-land/lands-owner-rental`, {
        ...data
      })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  })

export const getMyInstallmentLand = ({
  _limit,
  _page,
  _search,
  _sort,
  _active = true
}: IMarketServForm) =>
  new Promise<IMyLandListServ>((resolve, reject) => {
    const data = {
      limit: _limit,
      skip: _page,
      search: _search,
      sort: _sort,
      active: _active
    }
    services
      .post<IMyLandListServ>(`/nakaverse-land/lands-owner-installment`, {
        ...data
      })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  })

export const purchaseLandByRedeemCode = ({
  _code,
  _playerId,
  _landId
}: {
  _code: string
  _playerId: string
  _landId: string
}) =>
  new Promise<IRedeemServ>((resolve, reject) => {
    const data = { code: _code, player_id: _playerId, land_obj_id: _landId }
    services
      .post<IRedeemServ>(`/nakaverse-land/redeem`, { ...data })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  })

export const updateLandBanner = ({
  _landId,
  _img
}: {
  _landId: string
  _img: string
}) =>
  new Promise<ILandServ>((resolve, reject) => {
    const data = new FormData()
    data.append("land_id", _landId)
    data.append("image", _img)

    services
      .put<ILandServ>(`/nakaverse-land/update-logo-land`, data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  })

export const getAllLand = () =>
  new Promise<IAllLand>((resolve, reject) => {
    services
      .get<IAllLand>(`/market-place-new/NFT-Land/land-all`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  })

export const setTransferLand = ({
  _id,
  _to,
  _from,
  _txHash
}: {
  _id: string
  _to: string
  _from: string
  _txHash: string
}) =>
  new Promise<INFTTransferServ>((resolve, reject) => {
    const data = {
      id: _id,
      to_address: _to,
      from_address: _from,
      tx_hash: _txHash
    }
    services
      .post<INFTTransferServ>(`/nakaverse-land/land-owner-change`, {
        ...data
      })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  })
