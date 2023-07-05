import React from "react"
import Breadcrumb from "@components/molecules/Breadcrumb"
import SidebarProfile from "@components/molecules/SidebarProfile"
import Footer from "@components/organisms/Footer"
import Header from "@components/organisms/Header"
import { PROFILE_CRUMB } from "@configs/crumb"
import { ICrumb } from "@interfaces/IMenu"
import { MobileView } from "react-device-detect"
import { isMobile } from "@hooks/useGlobal"

interface IProp
  extends React.PropsWithChildren<React.ComponentPropsWithoutRef<"div">> {
  _breadcrumb?: ICrumb[]
}

const ProfileLayout = ({ _breadcrumb, children }: IProp) => (
  <>
    {isMobile ? (
      <MobileView>{children}</MobileView>
    ) : (
      <div className="main-container mx-auto px-2 lg:px-0">
        <Header />
        <div className="mx-auto mb-2 flex max-w-xs md:mx-0 md:mb-10 md:justify-start">
          <p />
          <Breadcrumb
            isCustom
            _breadcrumbs={_breadcrumb || PROFILE_CRUMB()}
          />
        </div>
        <div className="flex-row gap-[30px] md:flex">
          <SidebarProfile />
          {children}
        </div>
        <Footer />
      </div>
    )}
  </>
)

export default ProfileLayout
