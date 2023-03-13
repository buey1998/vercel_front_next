import { TMediaType } from "@feature/game/interfaces/IPartnerGame"

export interface IGameDownloadSlide {
  id: string
  image: string
  name: string
  description: string
  download_link: string
}

export interface IVerticalThumbSlide {
  id: string
  type: TMediaType
  src: string
}

export interface IVerticalThumbCardSlideProps {
  item: IVerticalThumbSlide
  index?: number
  activeIndex?: number
}
