import { ReactElement, useCallback, useEffect } from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useRouter } from "next/router"
import { GetServerSideProps } from "next"
import dynamic from "next/dynamic"
import { getGameByPath } from "@feature/game/containers/services/game.service"
import useGetGameByPath from "@feature/game/containers/hooks/useFindGameByPath"
import useGameStore from "@stores/game"
import { TabProvider } from "@feature/tab/contexts/TabProvider"
import { Box } from "@mui/material"
import CardBuyItem from "@feature/gameItem/components/molecules/CardBuyItem"
import { StartButtonCustomStyle } from "@feature/game/components/templates/lobby/GameContent"
import { useTranslation } from "react-i18next"
import useGlobal, { isMobile } from "@hooks/useGlobal"
import CardItemGold from "@feature/gameItem/components/molecules/CardItemGold"
import useLoadingStore from "@stores/loading"

const SkeletonBanner = dynamic(
  () => import("@components/atoms/skeleton/SkeletonBanner"),
  {
    suspense: true,
    ssr: false
  }
)
const GamePageDefault = dynamic(
  () => import("@components/templates/GamePageDefault"),
  {
    suspense: true,
    ssr: false
  }
)

const RightSidebarContentEffect = dynamic(
  () => import("@components/templates/contents/RightSidebarContentEffect"),
  {
    suspense: true,
    ssr: false
  }
)

const FullWidthContent = dynamic(
  () => import("@components/templates/contents/FullWidthContent"),
  {
    suspense: true,
    ssr: false
  }
)

const GameContent = dynamic(
  () => import("@feature/game/components/templates/lobby/GameContent"),
  {
    suspense: true,
    ssr: false
  }
)

const OverviewContent = dynamic(
  () => import("@components/organisms/OverviewContent"),
  {
    suspense: true,
    ssr: false
  }
)

const GameTabsVertical = dynamic(
  () => import("@feature/game/components/templates/lobby/GameTabsVertical"),
  {
    suspense: true,
    ssr: false
  }
)

const ButtonGame = dynamic(
  () => import("@feature/game/components/molecules/ButtonGame"),
  {
    suspense: true,
    ssr: false
  }
)

const GameDetailLayoutMobile = dynamic(
  () => import("@mobile/components/templates/GameDetailLayoutMobile"),
  {
    suspense: true,
    ssr: false
  }
)

export default function GameLobby() {
  const router = useRouter()
  const { onSetGameData } = useGameStore()
  const { GameHome } = router.query
  const { gameData } = useGetGameByPath(GameHome ? GameHome.toString() : "")
  const {
    getGameMode,
    getColorChipByGameType,
    getGameStoryModeURL,
    isRedirectRoomlist,
    isPokerGame
  } = useGlobal()
  const { t } = useTranslation()
  const { setClose } = useLoadingStore()

  useEffect(() => {
    let load = false

    if (!load) {
      if (!gameData) return
      setClose()
      onSetGameData(gameData)
    }

    return () => {
      load = true
    }
  }, [gameData, onSetGameData, setClose])

  const getTemplateLobby = () => {
    if (gameData) {
      switch (gameData.game_type) {
        default:
          return (
            <GameContent
              gameId={gameData?.id}
              gameType={getGameMode(gameData)}
              themeColor={getColorChipByGameType(getGameMode(gameData))}
            />
          )
      }
    }
  }

  /**
   * @description Button go to room list
   */
  const buttonGotoRoomlist = useCallback(() => {
    if (!gameData) return <></>
    return (
      <Box
        component="div"
        className="flex w-full flex-col justify-between gap-4 uppercase"
        sx={{
          ".like-no_wrapper": {
            flex: "0 0 100%",
            ".like-no_score": {
              width: "100%"
            }
          }
        }}
      >
        <Box
          component="div"
          sx={StartButtonCustomStyle}
          className="flex w-full justify-center uppercase"
        >
          <ButtonGame
            textButton={t("join-game")}
            url={`/${getGameMode(gameData)}/${
              gameData.path
            }${isRedirectRoomlist(gameData).toString()}`}
          />
        </Box>
      </Box>
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameData])

  /**
   * @description Render Form Buy Item
   */
  const renderFormBuyItem = () => {
    if (!gameData) return null
    switch (getGameMode(gameData)) {
      case "story-mode":
        return (
          <Box
            component="div"
            className="flex w-full flex-col justify-between gap-4 uppercase"
            sx={{
              ".like-no_wrapper": {
                flex: "0 0 100%",
                ".like-no_score": {
                  width: "100%"
                }
              }
            }}
          >
            <Box
              component="div"
              sx={StartButtonCustomStyle}
              className="flex w-full justify-center uppercase"
            >
              <ButtonGame
                textButton={t("join-game")}
                url={getGameStoryModeURL(gameData)}
              />
            </Box>
          </Box>
        )

      case "free-to-play":
        if (isPokerGame(gameData)) {
          return (
            <CardItemGold
              buttonStyle="purple"
              gameObject={gameData}
            />
          )
        }
        return buttonGotoRoomlist()

      case "free-to-earn":
        return buttonGotoRoomlist()
      default:
        return (
          <CardBuyItem
            buttonStyle="purple"
            gameObject={gameData}
          />
        )
    }
  }

  /**
   * @description Content Desktop
   * @returns
   */
  const renderContentDesktop = () =>
    gameData ? (
      <GamePageDefault
        component={
          <RightSidebarContentEffect
            className="mb-[64px]"
            content={getTemplateLobby()}
            aside={
              <Box
                component="div"
                className="aside-wrapper flex flex-col justify-between gap-4 lg:h-full"
                sx={{
                  ".panel-content": {
                    maxHeight: "270px",
                    ".custom-scroll": {
                      overflow: "hidden"
                    }
                  },
                  ".like-no_score": {
                    margin: "0"
                  }
                }}
              >
                <OverviewContent
                  gameId={gameData?.id}
                  gameType={getGameMode(gameData)}
                  gameIdNFT={gameData?.NFT_Owner}
                />
                {renderFormBuyItem()}
              </Box>
            }
          />
        }
        component2={
          <FullWidthContent
            sxCustomStyled={{
              "&.container": {
                maxWidth: "100%!important",
                "&.container-fullWidth": {
                  padding: "49px"
                }
              }
            }}
          >
            <TabProvider>
              <GameTabsVertical
                gameId={gameData.id}
                gameType="arcade-emporium"
              />
            </TabProvider>
          </FullWidthContent>
        }
      />
    ) : (
      <GamePageDefault component={<SkeletonBanner />} />
    )

  /**
   * @description Content Mobile
   */
  const renderContentMobile = () => {
    if (gameData) {
      return <GameDetailLayoutMobile gameData={gameData} />
    }
    return <GamePageDefault component={<SkeletonBanner />} />
  }

  /**
   * @description Render Default Page (Mobile or Desktop)
   * @returns
   */
  const renderDefaultPage = () => {
    if (isMobile) {
      return renderContentMobile()
    }
    return renderContentDesktop()
  }

  return renderDefaultPage()
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const _gameData = await getGameByPath((ctx?.params?.GameHome as string) || "")

  const _redirect = _gameData
    ? false
    : { destination: "/404", permanent: false }
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale!, ["common"]))
    },
    redirect: _redirect
  }
}

GameLobby.getLayout = function getLayout(page: ReactElement) {
  return page
}
