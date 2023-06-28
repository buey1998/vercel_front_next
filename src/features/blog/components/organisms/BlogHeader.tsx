import { Box } from "@mui/material"
import React from "react"
import MetaDate, { IMetaDate } from "../molecoles/MetaDate"
import MetaTags, { IMetaTags } from "../molecoles/MetaTags"
import MetaWriter, { IMetaWriter } from "../molecoles/MetaWriter"

interface IBlogHeaderProps extends IMetaTags, IMetaWriter, IMetaDate {
  className?: string
}

const BlogHeader = ({ className, ...props }: IBlogHeaderProps) => (
  <div className={`flex h-[100px] w-full max-w-[678px] ${className || ""}`}>
    <div className="flex flex-1 items-center">
      <MetaTags tags={props.tags} />
    </div>
    <div className="flex flex-1 items-center">
      <MetaWriter writerName={props.writerName} />
    </div>
    <Box
      component="div"
      className="relative flex flex-1 items-center justify-end"
      sx={{
        "&::before": {
          content: "''",
          position: "absolute",
          width: "1px",
          height: "50px",
          left: "0",
          backgroundColor: "#18181C",
          "@media (max-width: 1023px)": {
            display: "none"
          }
        }
      }}
    >
      <MetaDate date={props.date} />
    </Box>
  </div>
)

export default BlogHeader
