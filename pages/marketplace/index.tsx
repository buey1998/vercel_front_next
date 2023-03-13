import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import React, { ReactElement } from "react"
import dynamic from "next/dynamic"

const MarketplaceLayoutWithFilter = dynamic(
  () => import("@components/templates/marketplace/MarketplaceLayoutWithFilter"),
  {
    suspense: true
  }
)
const MarketplaceCardList = dynamic(
  () => import("@feature/page/marketplace/MarketplaceCardList"),
  {
    suspense: true
  }
)

const MarketplaceHome = () => <MarketplaceCardList />

MarketplaceHome.getLayout = function getLayout(page: ReactElement) {
  return <MarketplaceLayoutWithFilter>{page}</MarketplaceLayoutWithFilter>
}

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  }
}

export default MarketplaceHome
