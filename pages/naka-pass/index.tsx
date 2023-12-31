import { ReactElement } from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import dynamic from "next/dynamic"

const NakaPassPage = dynamic(() => import("@feature/page/games/NakaPassPage"), {
  suspense: true,
  ssr: false
})
const GamePageWithBreadcrumb = dynamic(
  () => import("@components/templates/GamePageWithBreadcrumb"),
  {
    suspense: true,
    ssr: false
  }
)

export default function NakaPass() {
  return (
    <article className="h-full md:w-[calc(100%-220px)]">
      <NakaPassPage />
    </article>
  )
}

NakaPass.getLayout = function getLayout(page: ReactElement) {
  return <GamePageWithBreadcrumb>{page}</GamePageWithBreadcrumb>
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
      // Will be passed to the page component as props
    }
  }
}
