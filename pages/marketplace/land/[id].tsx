import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import React, { ReactElement } from "react"
import dynamic from "next/dynamic"
// import MarketplaceDetail from "@feature/page/marketplace/MarketplaceDetail"

const MarketplaceLayoutWithoutFilter = dynamic(
  () =>
    import("@components/templates/marketplace/MarketplaceLayoutWithoutFilter"),
  {
    suspense: true,
    ssr: false
  }
)

const MarketplaceDetail = dynamic(
  () => import("@feature/page/marketplace/MarketplaceDetail"),
  {
    suspense: true,
    ssr: false
  }
)

const Page = () => <MarketplaceDetail />

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <MarketplaceLayoutWithoutFilter isNoFilter={false}>
      {page}
    </MarketplaceLayoutWithoutFilter>
  )
}

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  }
}

export default Page
