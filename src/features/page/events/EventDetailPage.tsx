import React from "react"
import { Box, Typography } from "@mui/material"
import EventsShareAndPlay from "@feature/event/components/EventsShareAndPlay"
import EventsTopScore from "@feature/event/components/EventsTopScore"
import dynamic from "next/dynamic"
import useEventController from "@feature/event/containers/hooks/useEventController"
import EventContent from "@feature/event/components/organisms/EventContent"
import EventSidebar from "@feature/event/components/organisms/EventSidebar"
import { EVENT_CRUMB } from "@configs/crumb"
import EventMessages from "@feature/event/components/molecules/EventMessages"
import { IMAGES } from "@constants/images"

const SkeletonBanner = dynamic(
  () => import("@components/atoms/skeleton/SkeletonBanner"),
  {
    suspense: true,
    ssr: false
  }
)
const EventDetailLayout = dynamic(
  () => import("@components/templates/EventDetailLayout"),
  {
    suspense: true,
    ssr: false
  }
)
const RightSidebarContentEffect = dynamic(
  () => import("@components/templates/contents/RightSidebarContentEffect"),
  {
    suspense: true,
    ssr: false
  }
)

const EventDetailPage = () => {
  const { currentEventData, topScoreDataState, leaderBoardDataState, eventId } =
    useEventController()

  const renderPlayerContent = () => {
    if (
      topScoreDataState &&
      currentEventData &&
      currentEventData.event_type === "share_and_play"
    ) {
      return (
        <EventsTopScore
          users={topScoreDataState.data}
          playerCount={topScoreDataState.player_count}
          transactionCount={topScoreDataState.transaction_count}
        />
      )
    }
    if (
      leaderBoardDataState &&
      currentEventData &&
      currentEventData.event_type === "top_score_championship"
    ) {
      return (
        <EventsShareAndPlay
          users={leaderBoardDataState.new_data_player_score}
          playerCount={leaderBoardDataState.player_count}
          transactionCount={leaderBoardDataState.transaction_count}
        />
      )
    }
  }

  /**
   * @description Render messages by event type
   */
  const renderMessages = () => {
    if (currentEventData && currentEventData.shot_detail) {
      return <EventMessages messages={currentEventData.shot_detail} />
    }
  }

  return (
    <Box
      component="section"
      className="section-event-detail"
      sx={{
        ".right-sidebar-content__wrapper": {
          backgroundImage: `url(${IMAGES.eventBackground.src})`,
          minHeight: "auto",
          maxHeight: "740px"
        },
        ".right-sidebar-content__sidebar": {
          ".panel-content": {
            maxHeight: "365px"
          }
        }
      }}
    >
      {currentEventData ? (
        <EventDetailLayout
          bannerImage={currentEventData.banner_image}
          bannerAlt={currentEventData.name}
          breadcrumbs={EVENT_CRUMB({
            title: currentEventData.name ?? "",
            id: eventId
          })}
          component={
            <RightSidebarContentEffect
              className="mb-5 xl:mb-24"
              content={<EventContent />}
              aside={<EventSidebar />}
            />
          }
          component2={
            <Box
              component="div"
              sx={{
                "&.container": {
                  maxWidth: "100%!important"
                }
              }}
              className="flex flex-col gap-4"
            >
              {renderMessages()}
              <div className="rounded-md border-[1px] border-neutral-700 border-opacity-80 bg-neutral-780 p-4 font-neue-machina-bold md:px-16 md:py-8 md:text-center md:text-base">
                <Typography className="font-dogicapixel-bold text-center  uppercase">
                  Reward Pool
                </Typography>
                <Typography className=" text-green-default font-dogicapixel-bold text-center text-[15px] uppercase">
                  {currentEventData.reward}
                </Typography>
              </div>
              {/* TODO YUI remove when flow events success */}
              <div className="rounded-md border-[1px] border-neutral-700 border-opacity-80 bg-neutral-780 p-4 font-neue-machina-bold md:px-16 md:py-8 md:text-center md:text-base">
                <Typography className="font-dogicapixel-bold text-center  uppercase">
                  Event Status
                </Typography>
                <Typography className=" text-green-default font-dogicapixel-bold text-center text-[15px] uppercase !text-error-main">
                  [ {currentEventData.status} ]
                </Typography>
              </div>
              {/* Display when event is not end */}
              {/* {currentEventData.status !== "end" } */}
              {renderPlayerContent()}
            </Box>
          }
        />
      ) : (
        <EventDetailLayout component={<SkeletonBanner />} />
      )}
    </Box>
  )
}

export default EventDetailPage
