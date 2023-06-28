import Dropdown from "@components/atoms/DropdownCustom"
import SearchIcon from "@components/icons/SearchIcon"
import { Grid, TextField } from "@mui/material"
import useFilterStore from "@stores/blogFilter"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

const HeadPartnerGames = ({ children }: { children: React.ReactNode }) => {
  const { setSearch: setSearchBlog } = useFilterStore()
  const router = useRouter()
  const { pathname } = router
  const path = pathname.split("/")
  const responsiveStyle =
    "mx-auto lg:mx-0 !w-[300px] md:!w-[265px] lg:!w-[200px] xl:!w-[218px]"
  const { t } = useTranslation()

  const [searchVal, setSearchVal] = useState<string>("")

  useEffect(() => {
    const deboucer = setTimeout(() => {
      setSearchBlog(searchVal)
    }, 1000)

    return () => clearTimeout(deboucer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchVal])
  return (
    <div className="w-[calc(100%)]">
      <Grid
        container
        spacing={2}
        columns={15}
        className="mb-10 mt-4 grid md:mt-[-16px] md:grid-cols-2 lg:flex"
      >
        {path[1] === "publishers" ? (
          <Grid
            item
            xs={3}
            className="max-w-full"
          >
            <Dropdown
              title={t("All Publisher Categories")}
              className={responsiveStyle}
            />
          </Grid>
        ) : (
          <Grid
            item
            xs={3}
            className="max-w-full"
          >
            <Dropdown
              title={t("All Partner Categories")}
              className={responsiveStyle}
            />
          </Grid>
        )}
        <Grid
          item
          xs={9}
          className="hidden 2xl:block"
        />
        <Grid
          item
          xs={3}
          className="mx-auto max-w-full lg:mx-0"
        >
          <TextField
            value={searchVal}
            onChange={(event) => {
              let { value } = event.target
              value = value.replace(/[^A-Za-z0-9\s]/gi, "")
              setSearchVal(value)
            }}
            placeholder={`${t("search_games")}...`}
            InputProps={{
              startAdornment: <SearchIcon className="mr-4" />
            }}
            className="w-[300px] md:!w-[265px] lg:!w-[164px] xl:!w-[218px]"
          />
        </Grid>
      </Grid>
      {children}
    </div>
  )
}
export default HeadPartnerGames
