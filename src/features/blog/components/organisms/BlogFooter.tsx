import React from "react"
import ViewIcon from "@components/icons/BlogIcon/ViewIcon"
import ShareIcon from "@mui/icons-material/Share"
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded"
import { Box } from "@mui/material"
import SocialShare, { ISocialShareProps } from "./SocialShare"
import ViewCount from "../molecoles/ViewCount"

export interface IBlogFooterProps extends ISocialShareProps {
  view?: number
  shared?: number
  like?: number
}

const BlogFooter = ({ view, shared, like, ...props }: IBlogFooterProps) => (
  <Box
    component="div"
    sx={{
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "81px",
        left: "-100%",
        borderTop: "1px solid #101013",
        borderBottom: "1px solid #18181C",
        "@media (max-width: 1023px)": {
          display: "none"
        }
      }
    }}
    className="relative flex h-[80px] w-full flex-col items-center border-b-[1px] border-neutral-800 bg-primary-main px-12 md:flex-row"
  >
    <div className="count-wrapper flex flex-1 gap-3">
      <ViewCount
        icon={<ViewIcon />}
        count={view || 0}
      />
      {shared ? (
        <ViewCount
          icon={<ShareIcon />}
          count={shared || 0}
        />
      ) : null}

      {like ? (
        <ViewCount
          icon={<ThumbUpRoundedIcon />}
          count={like || 0}
        />
      ) : null}
    </div>

    <div className="flex-1">
      <SocialShare
        shareTitle={props.shareTitle}
        shareURL={props.shareURL}
      />
    </div>
  </Box>
)

export default BlogFooter
