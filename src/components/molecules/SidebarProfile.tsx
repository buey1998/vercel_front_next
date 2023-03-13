import { MENU_LOGGEDIN } from "@configs/menu"
import { MenuList } from "@mui/material"
import { IProfile } from "@src/types/profile"
import useProfileStore from "@stores/profileStore"
import React, { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import Balance from "./balance/Balance"
import StatProfile from "./statProfile/StatProfile"
import MenuLoggedin from "./menuProfile/MenuLoggedin"

const SidebarProfile = () => {
  const { profile } = useProfileStore()
  const [profileData, setProfileData] = useState<IProfile>()

  useEffect(() => {
    if (profile && profile.data) {
      setProfileData(profile.data as IProfile)
    }
  }, [profile])

  return (
    <div className="mx-auto w-full max-w-xs gap-5 md:mx-0 md:flex md:w-[200px] md:flex-col">
      <MenuList className="rounded-[13px] bg-neutral-700 p-[6px]">
        {MENU_LOGGEDIN.map((ele) => (
          <MenuLoggedin
            ele={ele}
            key={uuidv4()}
          />
        ))}
      </MenuList>

      <Balance
        variant="naka"
        token="NAKA"
        sx={{
          minWidth: 200,
          height: "auto"
        }}
      />

      {profileData && (
        <StatProfile
          exp={{
            level: profileData.level,
            expAmount: profileData.exp,
            maxExp: profileData.max_exp
          }}
          energy={{
            staminaPoint: profileData.stamina_point,
            totalStamina: profileData.total_stamina || 20
          }}
          className="flex-col"
          sx={{
            minWidth: 200,
            height: "auto"
          }}
        />
      )}
    </div>
  )
}

export default SidebarProfile
