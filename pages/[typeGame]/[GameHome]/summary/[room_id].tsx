import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"
import React, { ReactElement } from "react"

const GameRoomLayout = dynamic(
  () => import("@components/templates/GameRoomLayout"),
  {
    suspense: true
  }
)
const GameSummaryPage = dynamic(
  () => import("@feature/page/games/gameSummaryPage"),
  {
    suspense: true
  }
)

export default function Notification_id() {
  const router = useRouter()
  const { room_id } = router.query

  return (
    <>
      <GameSummaryPage _roomId={room_id as string} />
    </>
  )
}

Notification_id.getLayout = function getLayout(page: ReactElement) {
  return <GameRoomLayout>{page}</GameRoomLayout>
}

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  }
}
