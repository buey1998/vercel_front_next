import ShapeIcon from "@components/icons/ShapeIcon"
import Banners from "@components/molecules/Banners"
import HeadPartnerGames from "@components/molecules/HeadPartnerGames"
import SidebarGames from "@components/molecules/SidebarGames"
import Tagline from "@components/molecules/tagline/Tagline"
import Footer from "@components/organisms/Footer"
import Header from "@components/organisms/Header"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import React from "react"

const GamePageLayout = ({
  children
}: React.PropsWithChildren<React.ComponentPropsWithoutRef<"div">>) => {
  const router = useRouter()
  const { pathname } = router
  const path = pathname.split("/")
  const { t } = useTranslation()

  return (
    <div className="main-container mx-auto">
      <Header />
      <Tagline
        bgColor="bg-neutral-800"
        textColor="text-neutral-500 font-bold"
        text={t("christmas_gift")}
        icon={<ShapeIcon fill="#4E5057" />}
        show={false}
      />
      <Banners />
      <div className="flex-row gap-[30px] md:flex">
        <SidebarGames />
        {path.length === 2 && path[1] === "publishers" ? (
          children
        ) : (
          <HeadPartnerGames>{children}</HeadPartnerGames>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default GamePageLayout
