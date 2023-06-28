import SearchIcon from "@components/icons/SearchIcon"
import { MENU_BLOG_HEADER } from "@configs/menu"
import { Button, TextField, Typography } from "@mui/material"
import useSearchStore from "@stores/blogFilter"
import useSelectStore from "@stores/selector"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import React, { useEffect, useState } from "react"
import { commonPattern } from "@constants/regex"

const HeadBlog = ({ children }: { children: React.ReactNode }) => {
  const styleButton = {
    minWidth: "10px !important",
    borderRadius: "15px !important"
  }

  const { setSearch: setSearchBlog, clearSearch } = useSearchStore()
  const { select: selectHeader, setSelect: setSelectHeader } = useSelectStore()
  const router = useRouter()

  const { t } = useTranslation()

  useEffect(() => {
    clearSearch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname])

  const [searchVal, setSearchVal] = useState<string>("")

  useEffect(() => {
    const deboucer = setTimeout(() => {
      setSearchBlog(searchVal)
    }, 1000)

    return () => clearTimeout(deboucer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchVal])

  return (
    <div className="mx-auto w-full max-w-[1140px] xl:mx-0">
      {/* {selectHeader} */}
      <div className="justify-between max-md:my-[30px] md:flex">
        <div className="mx-auto mb-[30px] flex h-full w-full max-w-xs justify-between gap-1 rounded-lg bg-neutral-700 p-1 md:mx-0 md:w-[230px]">
          {MENU_BLOG_HEADER.map((item) => (
            <Button
              key={item.name}
              sx={styleButton}
              className={`button-select-naka xs:mb-1 !hover:bg-error-main !hover:text-white-primary group h-[40px] w-full !rounded-lg !text-black-default ${
                selectHeader === item.link
                  ? "!bg-primary-main"
                  : "!bg-neutral-800"
              } md:mb-0`}
              variant="contained"
              size="large"
              onClick={() => {
                setSelectHeader(item.link)
              }}
            >
              <div className="">{item.icon}</div>
              <Typography className="!font-neue-machina-semi !text-sm">
                {t(`${item.name}`)}
              </Typography>
            </Button>
          ))}
        </div>
        <TextField
          value={searchVal}
          onChange={(event) => {
            let { value } = event.target
            value = value.replace(commonPattern, " ")
            setSearchVal(value)
          }}
          className="mx-auto h-full w-full max-w-xs max-md:flex md:mx-0 md:w-[234px] md:px-2"
          placeholder={t("search") + t("Blog")}
          InputProps={{
            style: {
              fontSize: "12px",
              fontFamily: "neueMachina",
              color: "#fff"
            },
            startAdornment: <SearchIcon className="mr-4" />
          }}
        />
      </div>

      <div>{children}</div>
    </div>
  )
}

export default HeadBlog
