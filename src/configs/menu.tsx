import {
  IMenu,
  IMenuIcon,
  IMenuMarketPlace,
  ISelectDropDown
} from "@interfaces/IMenu"
import CONFIGS from "@configs/index"
import EditProfileIcon from "@components/icons/MenunIcon/EditProfileIcon"
import WishlistIcon from "@components/icons/MenunIcon/WishlistIcon"
import PlayHistoryIcon from "@components/icons/MenunIcon/PlayHistoryIcon"
import YourMissionIcon from "@components/icons/MenunIcon/YourMissionIcon"
import InventoryIcon from "@components/icons/MenunIcon/InventoryIcon"
import ItemRewardIcon from "@components/icons/MenunIcon/ItemRewardIcon"
import SupportIcon from "@components/icons/MenunIcon/SupportIcon"
import IconDollar from "@components/icons/dollarIcon"
import { IMAGES } from "@constants/images"
import AboutUsIcon from "@components/icons/BlogIcon/AboutUsIcon"
import Campfire from "@components/icons/Campfire"
import MarketPlaceIcon from "@components/icons/BlogIcon/MarketPlaceIcon"
import NakaverseIcon from "@components/icons/BlogIcon/NakaverseIcon"
import NakapunksIcon from "@components/icons/BlogIcon/NakapunksIcon"
import NewIcon from "@components/icons/BlogIcon/NewIcon"
import FireOutLineIcon from "@components/icons/BlogIcon/FireOutLineIcon"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import Inventory from "@components/icons/Inventory"
import Support from "@components/icons/Support"
import Profile from "@components/icons/Profile"
import ICoupon from "@components/icons/Coupon"
import IReferrals from "@components/icons/Referrals"
import IStacking from "@components/icons/Stacking"
import IconSwap from "@components/icons/SwapIcon"
import SwapCallsIcon from "@mui/icons-material/SwapCalls"
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined"
import BlogIcon from "@components/icons/BlogIcon/BlogIcon"
import WalletIcon from "@components/icons/MenunIcon/WalletIcon"
import LaunchIcon from "@components/icons/MenunIcon/LaunchIcon"
import TransactionIcon from "@components/icons/MenunIcon/TransactionIcon"
import MyLandIcon from "@components/icons/Inventory/MyLandIcon"
import TransactionIconMKP from "@components/icons/Inventory/TransactionIcon"
import DollarIcon from "@components/icons/Referral/DollarIcon"
import ProcessPaymentIcon from "@components/icons/Inventory/ProcessPaymentIcon"
import { TType } from "@feature/marketplace/interfaces/IMarketService"
import CommissionIcon from "@components/icons/MenunIcon/CommissionIcon"
import IDiamond from "@components/icons/Diamond"
import CalendarSolidIcon from "@components/icons/CalendarSolidIcon"
import GameStoryIcon from "@components/icons/GameStoryIcon"
import FreeToEarnIcon from "@components/icons/FreeToEarnIcon"
import DesktopIcon from "@components/icons/DesktopIcon"
import {
  GameItemIcon,
  LandIcon,
  BuildingIcon,
  MaterialIcon,
  NakapunkIcon,
  ArcadeGameIcon,
  ReefIcon
} from "@components/icons/MenunIcon/MarketIcon"

// TODO: Open after launch V2
// import GlobalIcon from "@components/icons/GlobalIcon"
// import BoltIcon from "@mui/icons-material/Bolt"
// import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined"
// import TournamentIcon from "@components/icons/TournamentIcon"

export const MENU = [
  {
    name: "Home",
    link: "/",
    isChide: false,
    image: {
      src: IMAGES.tableCom.src,
      widthImg: 240,
      height: 150,
      alt: "image-game"
    }
  },
  {
    name: "Games",
    link: "/games",
    isChide: true,
    left: "120px !important",
    image: {
      src: IMAGES.tableCom.src,
      widthImg: 240,
      height: 150,
      alt: "image-game"
    },
    chide: [
      {
        name: "Play To Earn Games",
        link: "/play-to-earn",
        icon: <IconDollar.Ori className="stroke-neutral-300" />
      },
      {
        name: "Free To Play Games",
        link: "/free-to-play",
        icon: <IconDollar.Mask className="stroke-neutral-300" />,
        textRight: "Free"
      },
      {
        name: "Free To Earn Games",
        icon: <FreeToEarnIcon stroke="#E1E2E2" />,
        link: "/free-to-earn",
        textRight: "Free"
      },
      {
        name: "Story Mode Games",
        link: "/story-mode",
        icon: <GameStoryIcon stroke="#E1E2E2" />,
        textRight: "Free"
      },
      // TODO: Open after launch V2
      // {
      //   name: "Tournament",
      //   link: "/tournament",
      //   icon: TournamentIcon
      // } /**
      //  @description name svgIcon in forder menu in public (if icon is string) */,
      // {
      //   name: "Partner Games",
      //   link: "/partner-games",
      //   icon: LanguageOutlinedIcon
      // },
      {
        name: "Arcade Emporium",
        link: "/arcade-emporium",
        icon: IDiamond
      },
      {
        name: "Events",
        link: "/events",
        icon: CalendarSolidIcon
      }
      // TODO: Open after launch V2
      // {
      //   name: "NAKA Pass",
      //   icon: BoltIcon,
      //   link: "/naka-pass"
      // }
      // {
      //   name: "NFT Pass",
      //   link: "/nft-pass",
      //   icon: MapOutlinedIcon
      // }
    ]
  },
  {
    name: "Services",
    link: "/services",
    isChide: true,
    image: {
      src: IMAGES.tableCom.src,
      widthImg: 240,
      height: 150,
      alt: "image-game"
    },
    chide: [
      {
        name: "P2P DEX",
        link: "/p2p-dex",
        icon: SwapCallsIcon
      },
      {
        name: "Staking",
        link: "/staking",
        icon: IStacking
      },
      {
        name: "Referral Program",
        link: "/referral",
        icon: IReferrals
      },
      { name: "Coupon", link: "/coupon", icon: LocalActivityOutlinedIcon }
    ]
  },
  {
    name: "NAKA Ecosystem",
    link: "/naka-ecosystems",
    isChide: true,
    left: "-180px !important",
    image: {
      src: IMAGES.tableCom.src,
      widthImg: 240,
      height: 150,
      alt: "image-game"
    },
    chide: [
      {
        name: "Marketplace",
        link: `${CONFIGS.BASE_URL.MARKETPLACE}`,
        icon: MarketPlaceIcon
      },
      {
        name: "Nakaverse",
        link: `${CONFIGS.BASE_URL.NAKAVERSE}`,
        icon: NakaverseIcon
      },
      {
        name: "Nakapunks",
        link: `${CONFIGS.BASE_URL.MARKETPLACE}/naka-punk`,
        icon: NakapunksIcon
      },
      {
        name: "Blog",
        link: "/blog",
        icon: BlogIcon
      },
      {
        name: "About Us",
        link: "https://main.nakamoto.games",
        icon: AboutUsIcon
      },
      // TODO: Open after launch V2
      {
        name: "Become Developer",
        link: "/become-developer",
        icon: DesktopIcon
      }
    ]
  }
]

export const MENU_GUEST: IMenu[] = [
  {
    id: "play-to-earn",
    label: "Play To Earn Games",
    icon: <IconDollar.Ori className="stroke-neutral-300" />,
    href: "/play-to-earn",
    external: false
  },
  {
    id: "free-to-play",
    label: "Free To Play Games",
    icon: <IconDollar.Mask className="stroke-neutral-300" />,
    href: "/free-to-play",
    external: false
  },
  {
    id: "free-to-earn",
    label: "Free To Earn Games",
    icon: <FreeToEarnIcon stroke="#E1E2E2" />,
    href: "/free-to-earn",
    external: false
  },
  {
    id: "story-mode",
    label: "Story Mode Games",
    icon: <GameStoryIcon stroke="#E1E2E2" />,
    href: "/story-mode",
    external: false
  },
  // TODO: Open after launch V2
  // {
  //   id: "tournament",
  //   label: "Tournament",
  //   icon: <TournamentIcon className="stroke-neutral-300" />,
  //   href: "/tournament",
  //   external: false
  // },
  // {
  //   id: "partner-games",
  //   label: "Partner Games",
  //   icon: <GlobalIcon className="stroke-neutral-300" />,
  //   href: "/partner-games",
  //   external: false
  // },
  {
    id: "arcade-emporium",
    label: "Arcade Emporium",
    icon: <IDiamond stroke="#E1E2E2" />,
    href: "/arcade-emporium",
    external: false
  },
  {
    id: "events",
    label: "Events",
    icon: <CalendarSolidIcon stroke="#E1E2E2" />,
    href: "/events",
    external: false
  }
  // TODO: Open after launch V2
  // {
  //   id: "naka-pass",
  //   label: "NAKA Pass",
  //   icon: <BoltIcon stroke="#E1E2E2" />,
  //   href: "/naka-pass",
  //   external: true
  // }
]

export const MENU_LOGGEDIN: IMenu[] = [
  {
    id: "edit-profile",
    label: "Edit Profile",
    href: "/profile",
    icon: <EditProfileIcon />,
    external: false
  },
  {
    id: "wallet",
    label: "Wallet",
    href: "/wallet",
    icon: <WalletIcon />,
    external: false
  },
  {
    id: "my-games",
    label: "My Games",
    href: "/my-games",
    icon: <LaunchIcon />,
    external: false
  },
  {
    id: "wishlist",
    label: "Wishlist",
    href: "/favourite-games",
    icon: <WishlistIcon />,
    external: false
  },
  {
    id: "transactions",
    label: "All Transactions",
    href: "/transactions",
    icon: <TransactionIcon />,
    external: false
  },
  {
    id: "play-history",
    label: "Played History",
    href: "/history",
    icon: <PlayHistoryIcon />,
    external: false
  },
  {
    id: "commission",
    label: "Commission",
    href: "/commission",
    icon: <CommissionIcon />,
    external: false
  },
  {
    id: "your-mission",
    label: "Your Mission",
    href: "/mission",
    icon: <YourMissionIcon />,
    external: false
  },
  {
    id: "inventory",
    label: "Inventory",
    icon: <InventoryIcon />,
    href: `${CONFIGS.BASE_URL.MARKETPLACE}/en/inventory/land`,
    external: true,
    hasToken: true
  },
  {
    id: "earn-reward",
    label: "Item Reward",
    icon: <ItemRewardIcon />,
    href: "/earn-reward",
    external: false
  },
  {
    id: "support",
    label: "Support",
    icon: <SupportIcon />,
    href: `https://t.me/NakamotoGames`,
    external: true,
    hasToken: true
  }
]

export const MENU_INVENTORY = [
  {
    label: "Account",
    icon: "IconAccount",
    href: "/inventory/lands",
    // Remove the /inventory, and auto redirect to /inventory/lands
    external: false
  },
  {
    label: "Transaction Item",
    icon: "IconTransactions",
    href: "/inventory/transaction-item",
    external: false
  }
]

export const NFT_MENU = [
  {
    label: "Lands",
    icon: "IconClock",
    href: "/inventory/lands"
  },
  {
    label: "Game Items",
    icon: "IconLight",
    href: "/inventory/items"
  }
]

export const MENU_PROFILE = [
  {
    label: "Player Information",
    icon: "IconAccount",
    href: "/profile",
    external: false
  }
]

export const MENU_PROFILE_Datell: IMenu[] = [
  {
    id: "my profile",
    label: "My Profile",
    icon: <Profile className="stroke-neutral-300" />,
    href: "/",
    external: false
  },
  {
    id: "wishlist",
    label: "Wishlist",
    icon: <FavoriteBorderOutlinedIcon className="stroke-neutral-300" />,
    href: "/",
    external: false
  },
  {
    id: "play history",
    label: "Play History",
    icon: <AccessTimeIcon className="stroke-neutral-300" />,
    href: "/history",
    external: false
  },
  {
    id: "your mission",
    label: "Your Mission",
    icon: <Campfire />,
    href: "/mission",
    external: false
  },
  {
    id: "inventory",
    label: "Inventory",
    icon: <Inventory className="stroke-neutral-300" />,
    href: "/inventory",
    external: false
  },
  {
    id: "item reward",
    label: "Item Reward",
    icon: <ItemRewardIcon />,
    href: "/item-reward",
    external: false
  },
  {
    id: "support",
    label: "Support",
    icon: <Support className="stroke-neutral-300" />,
    href: "/profile",
    external: false
  }
]

export const MENU_MAIN_PC: IMenuIcon[] = [
  {
    title: "P2P Trading",
    href: `/`,
    src: "/assets/images/icons/icon_p2p.svg",
    alt: `P2P Trading`
  },
  {
    title: "My Order",
    href: `/`,
    src: "/assets/images/icons/icon_p2p.svg",
    alt: `My Order`
  }
]

export const MENU_BLOG: IMenu[] = [
  {
    id: "about-us",
    label: "About Us",
    icon: <AboutUsIcon className="stroke-neutral-300" />,
    href: "https://main.nakamoto.games/",
    external: false
  },
  {
    id: "marketplace",
    label: "Marketplace",
    icon: <MarketPlaceIcon className="stroke-neutral-300" />,
    href: CONFIGS.BASE_URL.MARKETPLACE,
    external: true
  },
  {
    id: "nakaverse",
    label: "Nakaverse",
    icon: <NakaverseIcon className="stroke-neutral-300" />,
    href: `${CONFIGS.BASE_URL.NAKAVERSE}`,
    external: true
  },
  {
    id: "nakapunks",
    label: "Nakapunks",
    icon: <NakapunksIcon className="stroke-neutral-300" />,
    href: `${CONFIGS.BASE_URL.MARKETPLACE}/nakapunks`,
    external: false
  },
  {
    id: "become-developer",
    label: "Become Developer",
    icon: <DesktopIcon className="stroke-neutral-300" />,
    href: "/become-developer",
    external: false
  }
]

export const MENU_BLOG_HEADER = [
  // {
  //   name: "All",
  //   link: "date_released",
  //   isChide: false,
  //   icon: null
  // },
  {
    name: "New",
    link: "date_released",
    isChide: true,
    left: "120px !important",
    icon: (
      <NewIcon className="mr-2 stroke-black-600  group-hover:!fill-white-default group-hover:!stroke-white-default" />
    )
  },
  {
    name: "Hot",
    link: "info.like",
    isChide: true,
    icon: (
      <FireOutLineIcon className="mr-2  stroke-black-600 group-hover:!stroke-white-default" />
    )
  }
  // {
  //   name: "Discusion",
  //   link: "",
  //   isChide: true,
  //   left: "-180px !important",
  //   icon: <Discusion className="mr-2" />
  // }
]

export const MENU_SERVICES = [
  {
    id: "p2p-dex",
    label: "P2P DEX",
    icon: (
      <IconSwap
        className="stroke-neutral-300"
        stroke="#E1E2E2"
      />
    ),
    href: "/p2p-dex",
    external: false
  },
  {
    id: "staking",
    label: "Staking",
    icon: (
      <IStacking
        className="stroke-neutral-300"
        stroke="#E1E2E2"
      />
    ),
    href: "/staking",
    external: false
  },

  {
    id: "referral-program",
    label: "Referral Program",
    icon: (
      <IReferrals
        className="stroke-neutral-300"
        stroke="#E1E2E2"
      />
    ),
    href: "/referral",
    external: false
  },
  {
    id: "coupon",
    label: "Coupon",
    icon: (
      <ICoupon
        className="stroke-neutral-300"
        stroke="#E1E2E2"
      />
    ),
    href: "/coupon",
    external: false
  }
]

export const MENU_MARKETPLACE: IMenuMarketPlace[] = [
  {
    name: "NAKA Market",
    link: "/marketplace",
    isChilde: false,
    left: "180px !important",
    image: {
      src: IMAGES.tableCom.src,
      widthImg: 240,
      height: 150,
      alt: "image-game"
    },
    chide: [
      {
        name: "Land",
        link: "/marketplace",
        icon: LandIcon
      },
      {
        name: "Buildings",
        link: "/marketplace/building",
        icon: BuildingIcon
      },
      {
        name: "NAKA Punks",
        link: "/marketplace/naka-punk",
        icon: NakapunkIcon
      },
      {
        name: "Avatar Reef",
        link: "/marketplace/avatar-reef",
        icon: ReefIcon
      }
    ]
  },
  {
    name: "P2P Market",
    link: "/marketplace/p2p",
    isChilde: true,
    image: {
      src: IMAGES.tableCom.src,
      widthImg: 240,
      height: 150,
      alt: "image-game"
    },
    chide: [
      {
        name: "Game Item",
        link: "/marketplace/p2p/game-item",
        icon: GameItemIcon
      },
      {
        name: "Land",
        link: "/marketplace/p2p/land",
        icon: LandIcon
      },
      {
        name: "Buildings",
        link: "/marketplace/p2p/building",
        icon: BuildingIcon
      },
      {
        name: "Material",
        link: "/marketplace/p2p/material",
        icon: MaterialIcon
      },
      {
        name: "NAKA Punks",
        link: "/marketplace/p2p/naka-punk",
        icon: NakapunkIcon
      },
      {
        name: "Arcade Game",
        link: "/marketplace/p2p/arcade-game",
        icon: ArcadeGameIcon
      }
    ]
  },
  {
    name: "Nakaverse Map",
    link: "/marketplace/map",
    isChilde: true,
    image: {
      src: IMAGES.tableCom.src,
      widthImg: 240,
      height: 150,
      alt: "image-game"
    }
  }
]

interface IMenuFilter {
  page:
    | "marketplace"
    | "p2p"
    | "inventory"
    | "forsale"
    | "rental"
    | "process-payment"
  child: { name: string; href: string }[]
}

export const MENU_MARKETPLACE_FILTERBOX: IMenuFilter[] = [
  {
    page: "p2p",
    child: [
      { name: "Game Item", href: "/marketplace/p2p/game-item" },
      { name: "Land", href: "/marketplace/p2p/land" },
      { name: "Buildings", href: "/marketplace/p2p/building" },
      { name: "Material", href: "/marketplace/p2p/material" },
      { name: "NAKA Punks", href: "/marketplace/p2p/naka-punk" },
      { name: "Arcade Game", href: "/marketplace/p2p/arcade-game" }
    ]
  },
  {
    page: "forsale",
    child: [
      { name: "Game Item", href: "/marketplace/inventory/forsale/game-item" },
      { name: "Material", href: "/marketplace/inventory/forsale/material" },
      { name: "Land", href: "/marketplace/inventory/forsale/land" },
      { name: "Buildings", href: "/marketplace/inventory/forsale/building" },
      {
        name: "Arcade Game",
        href: "/marketplace/inventory/forsale/arcade-game"
      },
      { name: "NAKA Punks", href: "/marketplace/inventory/forsale/naka-punk" }
    ]
  },
  {
    page: "rental",
    child: [
      { name: "Land", href: "/marketplace/inventory/rental/land" },
      { name: "Buildings", href: "/marketplace/inventory/rental/building" }
    ]
  },
  {
    page: "process-payment",
    child: [
      { name: "Land", href: "/marketplace/inventory/process-payment/land" },
      {
        name: "Building",
        href: "/marketplace/inventory/process-payment/building"
      }
    ]
  },
  {
    page: "inventory",
    child: [
      { name: "Game Item", href: "/marketplace/inventory/game-item" },
      { name: "Land", href: "/marketplace/inventory/land" },
      { name: "Building", href: "/marketplace/inventory/building" },
      { name: "Material", href: "/marketplace/inventory/material" },
      { name: "NAKA Punks", href: "/marketplace/inventory/naka-punk" },
      { name: "Arcade Game", href: "/marketplace/inventory/arcade-game" },
      { name: "Avatar Reef", href: "/marketplace/inventory/avatar-reef" }
    ]
  },
  {
    page: "marketplace",
    child: [
      { name: "Land", href: "/marketplace/land" },
      { name: "Buildings", href: "/marketplace/building" },
      { name: "NAKA Punks", href: "/marketplace/naka-punk" },
      { name: "Avatar Reef", href: "/marketplace/avatar-reef" }
    ]
  }
]

export const MENU_MARKETPLACE_INVENTORY: IMenu[] = [
  {
    id: "inventory",
    label: "Inventory",
    icon: <InventoryIcon />,
    href: "/marketplace/inventory",
    external: false
  },
  {
    id: "for-sale",
    label: "For Sale",
    icon: <DollarIcon />,
    href: "/marketplace/inventory/forsale",
    external: false
  },
  {
    id: "rental",
    label: "Rental",
    icon: <DollarIcon />,
    href: "/marketplace/inventory/rental",
    external: false
  },
  {
    id: "process-payment",
    label: "Process Payment",
    icon: <ProcessPaymentIcon />,
    href: "/marketplace/inventory/process-payment",
    external: false
  },
  {
    id: "transaction",
    label: "Transaction",
    icon: <TransactionIconMKP />,
    href: "/marketplace/inventory/transaction",
    external: false
  },
  {
    id: "my-land",
    label: "My Land",
    icon: <MyLandIcon />,
    href: "/marketplace/inventory/my-land",
    external: false
  }
]

export const MENU_ROUTER_MARKETPLACE_TYPE: TType[] = [
  "land",
  "building",
  "naka-punk",
  "material",
  "game-item",
  "arcade-game"
]

export const MENU_ROUTER_INVENTORY_RENTAL: TType[] = ["land", "building"]

export const INVENTORY_DROPDOWN = [
  {
    label: "Land",
    href: "/marketplace/inventory/land"
  },
  {
    label: "Buildings",
    href: "/marketplace/inventory/building"
  },
  {
    label: "Game Item",
    href: "/marketplace/inventory/game-item"
  },
  {
    label: "Material",
    href: "/marketplace/inventory/material"
  },
  {
    label: "NAKA Punks",
    href: "/marketplace/inventory/naka-punk"
  },
  {
    label: "Arcade Game",
    href: "/marketplace/inventory/arcade-game"
  },
  {
    label: "Avatar Reef",
    href: "/marketplace/inventory/avatar-reef"
  }
]

export const INVENTORY_DROPDOWN_FORSALE = [
  {
    label: "Land",
    href: "/marketplace/inventory/forsale/land"
  },
  {
    label: "Buildings",
    href: "/marketplace/inventory/forsale/building"
  },
  {
    label: "Game Item",
    href: "/marketplace/inventory/forsale/game-item"
  },
  {
    label: "Material",
    href: "/marketplace/inventory/forsale/material"
  },
  {
    label: "NAKA Punks",
    href: "/marketplace/inventory/forsale/naka-punk"
  },
  {
    label: "Arcade Game",
    href: "/marketplace/inventory/forsale/arcade-game"
  }
]

export const INVENTORY_DROPDOWN_RENTAL = [
  {
    label: "Land",
    href: "/marketplace/inventory/rental/land"
  },
  {
    label: "Buildings",
    href: "/marketplace/inventory/rental/building"
  }
]

export const INVENTORY_DROPDOWN_PROCESS = [
  {
    label: "Land",
    href: "/marketplace/inventory/process-payment/land"
  },
  {
    label: "Buildings",
    href: "/marketplace/inventory/process-payment/building"
  },
  {
    label: "Arcade Game",
    href: "/marketplace/inventory/process-payment/arcade-game"
  }
]

export const MARKET_FILTER_PRICE: ISelectDropDown[] = [
  { label: "Lowest to Highest", value: 1 },
  { label: "Highest to Lowest", value: -1 }
]

export const MARKET_FILTER_SELLINGTYPE: ISelectDropDown[] = [
  {
    label: "Installment",
    value: "installment"
  },
  {
    label: "Fullpayment",
    value: "fullpayment"
  },
  {
    label: "Rental",
    value: "rental"
  }
]

export const MARKET_FILTER_DATE: ISelectDropDown[] = [
  { label: "New", value: -1 },
  { label: "Oldest", value: 1 }
]

export const MARKET_FILTER_MAP: ISelectDropDown[] = [
  {
    label: "Owned",
    value: "Owned"
  },
  {
    label: "Occupied",
    value: "Occupied"
  },
  {
    label: "Avaliable for sale",
    value: "Avaliable for sale"
  }
]
