import { PaginationNaka } from "@components/atoms/pagination"
import SkeletonCard from "@components/atoms/skeleton/SkeletonCard"
import { P2EHeaderMenu } from "@constants/gameSlide"
import { getMyGameNFT } from "@feature/game/containers/services/game.service"
import { useQueryClient } from "@tanstack/react-query"
import React, { memo, useEffect, useRef } from "react"
import { v4 as uuid } from "uuid"
import useGameStore from "@stores/game/index"
import GameCard from "@feature/game/containers/components/molecules/GameCard"
import useGlobal from "@hooks/useGlobal"
import { IGetType } from "@feature/game/interfaces/IGameService"
import useGetMyGame from "@feature/game/containers/hooks/useGetMyGame"
import NoData from "@components/molecules/NoData"

const MyGamesPage = () => {
  const type: IGetType = "play-to-earn-games"
  const {
    limit,
    setPage,
    page,
    totalCount,
    setTotalCount,
    onHandleClick,
    defaultBody
  } = useGlobal()
  const fetchRef = useRef(false)
  const queryClient = useQueryClient()
  const { clearGameData } = useGameStore()

  const {
    myGamesData,
    myGamesIsFetching,
    myGamesIsLoading,
    myGamesIsPreviousData
  } = useGetMyGame()

  useEffect(() => {
    // totalCount
    if (!fetchRef.current && myGamesData) {
      fetchRef.current = true
      setTotalCount(myGamesData.info.totalCount)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myGamesData])

  useEffect(() => {
    if (!myGamesIsPreviousData && myGamesData) {
      queryClient.prefetchQuery({
        queryKey: ["games", type, page + 1],
        queryFn: () =>
          getMyGameNFT({
            ...defaultBody,
            nftgame: true
          }),
        staleTime: Infinity
      })
    }
    clearGameData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearGameData, myGamesData, myGamesIsPreviousData, page, queryClient])

  return (
    <div className="flex flex-col">
      <div className="mb-6 grid grid-cols-5 gap-y-4 gap-x-2">
        {myGamesIsPreviousData || myGamesIsLoading || myGamesIsFetching
          ? [...Array(limit)].map(() => <SkeletonCard key={uuid()} />)
          : null}
        {myGamesData && myGamesData.data.length > 0
          ? myGamesData.data.map((game) => (
              <GameCard
                key={game.id}
                menu={P2EHeaderMenu}
                data={game}
                onHandleClick={() =>
                  onHandleClick("play-to-earn", game.path, game)
                }
              />
            ))
          : null}
      </div>
      {myGamesData && myGamesData.data.length === 0 && (
        <NoData className="max-w-[300px]" />
      )}
      <PaginationNaka
        totalCount={totalCount}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  )
}

export default memo(MyGamesPage)
