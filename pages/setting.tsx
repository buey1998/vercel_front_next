import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import React, { ReactElement } from "react"
import dynamic from "next/dynamic"
import { GetServerSideProps } from "next"

const ProfileLayout = dynamic(
  () => import("@components/templates/ProfileLayout"),
  {
    suspense: true,
    ssr: false
  }
)

const SettingPage = () => <article className="h-full w-full" />

SettingPage.getLayout = function getLayout(page: ReactElement) {
  return <ProfileLayout>{page}</ProfileLayout>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
  props: {
    ...(await serverSideTranslations(ctx.locale!, ["common"]))
  }
})

export default SettingPage
