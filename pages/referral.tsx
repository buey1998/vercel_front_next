import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { ReactElement } from "react"
import dynamic from "next/dynamic"
import HeaderForWardBackWardMobile from "@mobile/components/atoms/headerMenu/HeaderForWardBackWardMobile"
import { useRouter } from "next/router"

const ReferralProgramPage = dynamic(
  () => import("@feature/page/ReferralProgramPage"),
  {
    suspense: true,
    ssr: false
  }
)
const ServicesPageLayout = dynamic(
  () => import("@components/templates/ServicesPageLayout"),
  {
    suspense: true,
    ssr: false
  }
)

export default function Referral() {
  const router = useRouter()
  return (
    <>
      <article className="h-full w-full">
        <HeaderForWardBackWardMobile
          label="referral"
          showForwardIcon={false}
          onClickBackWard={() => router.back()}
        />
        <ReferralProgramPage />
      </article>
    </>
  )
}

Referral.getLayout = function getLayout(page: ReactElement) {
  return <ServicesPageLayout>{page}</ServicesPageLayout>
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
      // Will be passed to the page component as props
    }
  }
}
