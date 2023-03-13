import { PaginationNaka } from "@components/atoms/pagination"
import SkeletonCard from "@components/atoms/skeleton/SkeletonCard"
import { P2EHeaderMenu } from "@constants/gameSlide"
import GameCard from "@feature/game/containers/components/molecules/GameCard"
import { useQueryClient } from "@tanstack/react-query"
import React, { memo, useEffect, useState } from "react"
import { v4 as uuid } from "uuid"
import useGameStore from "@stores/game/index"
import usePartnerGame from "@feature/game/containers/hooks/usePartnerGame"
import useGlobal from "@hooks/useGlobal"
import { getAllPartnerGames } from "@feature/game/partnerGames/containers/services/gamePartners.service"
import { filterGamePartner } from "@feature/partner/containers/services/dropdownPartner.service"
import useFilterStore from "@stores/blogFilter"
import { IPartnerGameData } from "@feature/game/interfaces/IPartnerGame"

const PartnerGames = () => {
  const search = ""
  const limit = 10
  const [page, setPage] = useState<number>(1)
  const [totalCount, setTotalCount] = useState<number>(0)
  const [gameFilter, setGameFilter] = useState<IPartnerGameData[]>()
  const queryClient = useQueryClient()
  const { clearGamePartnersData } = useGameStore()
  const { onHandleClick } = useGlobal()
  const {
    category: categoryDropdown,
    gameItem: gameItemDropdown,
    device: deviceDropdown,
    search: searchDropdown,
    clearSearch,
    clearCategory,
    clearGameItem,
    clearDevice
  } = useFilterStore()

  const {
    isLoading,
    isPreviousData,
    data: gameData
  } = usePartnerGame({
    _search: search,
    _limit: limit,
    _page: page
  })

  useEffect(() => {
    if (gameData?.info && gameData) {
      setTotalCount(gameData.info?.totalCount)
    }
  }, [gameData])

  useEffect(() => {
    if (!isPreviousData && gameData) {
      queryClient.prefetchQuery({
        queryKey: ["partner-games", limit, search, page + 1],
        queryFn: () =>
          getAllPartnerGames({
            _search: search,
            _limit: limit,
            _page: page + 1
          })
      })
      setGameFilter(gameData.data)
    }
    clearGamePartnersData()
    clearSearch()
    clearCategory()
    clearGameItem()
    clearDevice()
  }, [
    clearCategory,
    clearDevice,
    clearGameItem,
    clearGamePartnersData,
    clearSearch,
    gameData,
    isPreviousData,
    page,
    queryClient
  ])

  useEffect(() => {
    const filterData = {
      "limit": limit,
      "skip": page,
      "search": searchDropdown,
      "type": "",
      "genres_filter": categoryDropdown
    }
    filterGamePartner(filterData).then((res) => {
      if (res) {
        const { data, info } = res
        setGameFilter(data.data)
        setTotalCount(info ? info.totalCount : 1)
      }
    })
  }, [
    categoryDropdown,
    gameItemDropdown,
    deviceDropdown,
    searchDropdown,
    page,
    limit
  ])

  return (
    <div className="flex flex-col">
      <div className="mx-2 mb-6 grid grid-cols-2 gap-y-4 gap-x-2 md:mx-0 md:grid-cols-5">
        {isLoading
          ? [...Array(limit)].map(() => <SkeletonCard key={uuid()} />)
          : null}
        {gameFilter &&
          gameFilter.map((game) => (
            <GameCard
              key={game.id}
              menu={P2EHeaderMenu}
              partnerdata={game}
              imgPartner={game.image_thumbnail}
              onHandleClick={() =>
                onHandleClick("partner-game", game.slug, game)
              }
            />
          ))}
      </div>
      <PaginationNaka
        totalCount={totalCount}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  )
}
export default memo(PartnerGames)
