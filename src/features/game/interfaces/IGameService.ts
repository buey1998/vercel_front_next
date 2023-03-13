import {
  IGameItem,
  IGameItemList
} from "@feature/gameItem/interfaces/IGameItemService"
import {
  IFormatMessageService,
  IFormatService,
  IInfo
} from "@interfaces/IHelper"
import { IPlayToEarnRewardData } from "@src/types/games"
import { IPartnerGameData } from "./IPartnerGame"

export type TGameType = "singleplayer" | "multiplayer" | "storymode"

export type TTypeCode =
  | "single_01"
  | "single_02"
  | "multi_01"
  | "multi_02"
  | "story_01"
  | "survival_01"

export type IGetType =
  | "play-to-earn"
  | "play-to-earn-games"
  | "free-to-play"
  | "story-mode"
  | "must-try"
  | "hot-game"
  | "partner-game"
  | "partner-publisher"
  | "arcade-emporium"
  | "all"

export type TRoomStatus =
  | "playing"
  | "online"
  | "send_noti"
  | "running"
  | "ready_play"

export interface IGetGameByTypesProps {
  _type: IGetType
  _limit: number
  _page: number
  _categoryId?: string
  _deviceSup?: string
  _itemId?: string
  _search?: string
}

export interface IGamePayload {
  limit?: number
  skip?: number
  sort?: string
  search?: string
  category?: string
  item?: string
  device?: string
  nftgame?: string
  game_type: IGetType
}

export interface IGameHowTo {
  title: string
  details: string
}

export interface IGameSocketInfo {
  url_room?: string
  url_lobby?: string
}

export interface IGameSupport {
  key: string
  name: string
  supported: boolean
}

interface IGameBase {
  _id: string
  player_id: string
}

export interface IGameCurrentPlayerItemStatus extends IGameBase {
  timestamp_burn: Date
  socket_id: string
}

export interface IGameRewards extends IGameBase {
  wallet_address: string
  naka_for_player: number
}

export interface IGameRewardPaymentRate {
  no: number | string
  item_reward_amount: number | string
}

export interface IGameMetaData {
  item_key: string
  item_name: string
  type: string
  image: null | string
  mini_image: null | string
  active_display: boolean
  default_value: number | null
  max_value: number
}

export interface IGameMap {
  _id: string
  map_id: string
  map_name: string
}

export interface IGameCategory {
  name: string
  id: string
  slug: string
}

export interface IGameArcadeEmporium {
  is_NFT: boolean
  NFT_Owner: string
  image_nft_arcade_game: string
  animation_nft_arcade_game: string
}

export interface IGame extends IGameArcadeEmporium {
  _id: string
  howto: IGameHowTo
  socket_info?: IGameSocketInfo
  game_free_status: boolean
  hot_game_status: boolean
  hot_game_no: number | null
  banner_status: boolean
  banner_no: number | null
  banner_description: string
  tournament?: boolean
  browser_support: IGameSupport[]
  device_support: IGameSupport[]
  item: IGameItemList[]
  play_to_earn: boolean
  play_to_earn_status?: "end" | "free" | "in_progress"
  date_start_event?: Date | null
  date_end_event?: Date | null
  reward_item_amount?: number
  reward_payment_rate?: IGameRewardPaymentRate[]
  repeat_event_status?: boolean
  repeat_event_delay_minute?: number | null
  number_of_played?: number
  event_number?: number
  min_player: number
  map?: IGameMap[]
  name: string
  story: string
  is_active: boolean
  max_players: number
  play_time: number
  version: string
  developer: string
  category: IGameCategory
  category_list: IGameCategory[]
  game_type: TGameType
  type_code: TTypeCode
  game_url: string
  path: string
  image_main: string
  image_list: string
  image_room: string
  image_banner: string
  image_category_list: string
  image_reward: string
  image_waiting: string
  image_background: string
  image_sum: string
  id: string
  image_home_banner: string
  game_free_url?: string
  image_free_to_earn_icon?: string
  play_total_count?: number
  meta_data_list: IGameMetaData[]

  must_try_no: number
  must_try_status: boolean
}

interface IGameHowto {
  title: string
  details: string
}

interface ICategory {
  name: string
  id: string
}

interface IGameDevice {
  key: string
  name: string
  supported: boolean
}

interface IGameBrowser {
  key: string
  name: string
  supported: boolean
}

interface IRewardPaymentRate {
  item_reward_amount: number
  no: number
}

interface IGameStoryModeData {
  item_key: string
  item_name: string
  type: string
  image: string
  mini_image: string
  active_display: boolean
  default_value: number
  max_value: number
}

export interface IGameFav {
  number_of_played: number
  date_start_event: string | Date
  date_end_event: string | Date
  play_to_earn_status: string
  play_to_earn: boolean
  howto: IGameHowto
  item: IGameItem[]
  name: string
  story: string
  tournament: boolean
  is_active: boolean
  max_players: number
  play_time: number
  hot_game_status: boolean
  hot_game_no: number
  banner_status: boolean
  banner_no: number
  version: string
  developer: string
  category: ICategory
  game_type: string
  type_code: string
  game_url: string
  path: string
  image_waiting: string
  image_sum: string
  image_room: string
  image_banner: string
  image_reward: string
  image_main: string
  image_background: string
  banner_description: string
  game_free_status: boolean
  game_free_url: string
  image_category_list: string
  image_free_to_earn_icon: string
  image_home_banner: string
  image_list: string
  min_player: number
  map: IGameMap[]
  socket_info: {
    url_room: string
    url_lobby: string
  }
  id: string
  device_support: IGameDevice[]
  browser_support: IGameBrowser[]
  num: number
  title: string
  image: string
  _id: string
  reward_payment_rate: IRewardPaymentRate[]
  meta_data_list: IGameStoryModeData[]
  play_total_count?: number
}

export interface IGameRewardByPlayer extends IGameBase {
  claim_status: boolean
  item_amount: number
  event_number: number
  score: number
  is_active: boolean
  item_id: string
  game_id: string
  createdAt: Date
  updatedAt: Date
  current_time: Date
  __v?: number
}

export interface IGameService extends IFormatService {
  data: IGame[]
}

export interface IGamePartnerService extends IFormatService {
  data: IPartnerGameData
}

export interface IGameCurrentPlayer extends IGameBase {
  status: string // "inroom" | "ready" | "played" | "playing"
  item_burn: boolean
  transaction_status: boolean
  avatar: string
  username: string
  timestamp: Date
  rank: string
}

export interface IGameCurrentPlayerMulti extends IGameCurrentPlayer {
  owner?: boolean
}

export interface IGameHistoryUserPlay extends IGameBase {
  status: string
  timestamp: Date
  qty: number
}

export interface GameAllId {
  id: string | null | undefined
  name: string | null | undefined
  img: string | null | undefined
}

export interface IGameRoom {
  start_time: Date
  end_time: Date
  amount_current_player: number
  amount_send_reward: number
  createdAt: Date
  updatedAt: Date
  _id: string
  current_player: IGameCurrentPlayer[]
  rewards: IGameRewards[]
  game_id: string
  max_players: number
  rank_id: string
  amount_played: number
  is_active: boolean
  status: string
  room_number: number
  stage_id: number
  id: string
}

export interface IGameRoomService extends IGameRoom {
  rank_name: string
}

export interface IGameRoomDetail extends IGameRoom {
  room_status: TRoomStatus
  mutiplayer: boolean
  tournament: boolean
  user_create: boolean
  no_limit_time: boolean
  room_lock: boolean
  current_player_item_status: IGameCurrentPlayerItemStatus[]
  history_user_play: IGameHistoryUserPlay[]
  current_time: Date
  item_id: string
}

export interface IGameUsedItemsDetail extends IGameItem {
  model_id: number
}
export interface IGameUsedItem {
  _id: string
  item_id: string
  qty: number
}

export interface IGameAllState {
  data: IGame[]
}

export interface IGameSummary extends IGameBase {
  tx_address: string
  naka_for_player: number
  room_id: string
  current_score: number
  used_items: IGameUsedItem[]
  avatar: string
  user_name: string
  start_time: Date
  end_time: Date
  room_number: number
  wallet_address: string
  room_status: TRoomStatus
  detail_used_items: IGameUsedItemsDetail
}

export interface IGameReport {
  reward_naka: number
  player_number: number
  invest: number
  numnber_game_play: number
  cost_per_game_doller: string
  cost_per_game_naka: string
  profit_potential_min: number
  profit_potential_max: number
}

export interface IGameCategoryDetail extends IGameCategory {
  _id: string
  createdAt: Date
  updatedAt: Date
  detail: string
  slug: string
  color_code: string
  image_list: string
  image_banner: string
  is_active: boolean
}

export interface IGameRoomDetailService {
  gameRoomDetail: IGameRoomDetail[]
}

export interface IGameReportService extends IFormatService {
  data: IGameReport
}

export interface IGamePlayToEarnService extends IFormatService {
  data: IPlayToEarnRewardData[]
}

export interface IGameClaimEarnedRewardService extends IFormatMessageService {
  data: string
}

export interface IGameCategoryService extends IFormatService {
  data: IGameCategoryDetail[]
}

export interface IGetAllGameRooms {
  _gameId: string
  _email: string
  _itemId: string
}

export interface IGetPlayerInRoom {
  _roomId: string
  _playerId: string
  _type: "in" | "out"
}

export interface IClaimEarnedRewardByPlayerId {
  _playerId: string
  _rewardId: string
}

export interface IGetGameByTypes extends IFormatService, IGameAllState {
  message: string
}

export interface ICreateRoomDetail {
  no_room: string
  number_of_item: number
  public_room: boolean
  player_create: string
}

interface IMultiPlayer {
  owner?: boolean
  kick?: boolean
}
export interface CurrentPlayer extends IGameCurrentPlayer, IMultiPlayer {
  _id: string //
  player_id: string //
  socket_id: string //
}
export interface IGameRoomListSocket {
  create_room_detail: ICreateRoomDetail
  start_time: Date
  end_time: Date
  room_status: TRoomStatus
  amount_current_player: number
  amount_send_reward: number
  mutiplayer: boolean
  tournament: boolean
  user_create: boolean
  createdAt: Date
  updatedAt: Date
  no_limit_time: boolean
  room_lock: boolean
  _id: string
  current_player: CurrentPlayer[]
  current_player_item_status: any[]
  history_user_play: any[]
  rewards: any[]
  current_time: Date
  game_id: string
  max_players: number
  rank_id: null
  amount_played: number
  is_active: boolean
  status: string
  map_id: number
  room_number: number
  item_id: string
  id: string
}

export interface IDataRoomListSocket {
  gameRoomDetail: IGameRoomListSocket[]
  game_item_id: string
}
export interface IResSocketRoomList {
  info: IInfo
  data: IDataRoomListSocket
}

export interface IError {
  message: string
}

export interface IFilterGamesByKey {
  limit?: number
  skip?: number
  sort?: string
  search?: string
  category?: string | string[]
  item?: string | string[]
  device?: string
  game_type?: IGetType
  tournament?: boolean
  nftgame?: boolean
}
