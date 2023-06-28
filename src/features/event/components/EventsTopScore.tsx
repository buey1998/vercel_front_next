import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  TableHead
} from "@mui/material"
import {
  IFixedReward,
  IResponseSummaryData
} from "@feature/event/interface/IEventsService"
import TwitterIcon from "@components/icons/SocialIcon/TwitterIcon"
import { v4 as uuid } from "uuid"
import { Image } from "@components/atoms/image/index"
import NoData from "@components/molecules/NoData"
import { numberWithCommas } from "@src/helpers/addComma"
import useEventController from "../containers/hooks/useEventController"
import EventCardContent from "./EventCardContent"

interface IEventTopScoreProps {
  users: IResponseSummaryData[]
  playerCount: number
  transactionCount: number
}

const EventsTopScore = ({
  users,
  playerCount,
  transactionCount
}: IEventTopScoreProps) => {
  const { fixedRewardState, MOCKUP_REWARD } = useEventController()

  /**
   * @description Find reward by rank
   * @param _index
   * @returns
   */
  const renderRewardByRank = (_index: number) => {
    if (fixedRewardState.length === 0) {
      if (_index === 1) {
        return `${MOCKUP_REWARD[0].reward}$`
      }
      if (_index === 2) {
        return `${MOCKUP_REWARD[1].reward}$`
      }
      if (_index === 3) {
        return `${MOCKUP_REWARD[2].reward}$`
      }
      if (_index >= 4 && _index <= 10) {
        return `${MOCKUP_REWARD[3].reward}$`
      }
      if (_index >= 11 && _index <= 20) {
        return `${MOCKUP_REWARD[4].reward}$`
      }
      if (_index >= 21 && _index <= 30) {
        return `${MOCKUP_REWARD[5].reward}$`
      }
      if (_index >= 31 && _index <= 40) {
        return `${MOCKUP_REWARD[6].reward}$`
      }
      if (_index >= 41 && _index <= 50) {
        return `${MOCKUP_REWARD[7].reward}$`
      }
      if (_index >= 51) {
        return "-"
      }
    } else {
      fixedRewardState.sort(
        (a: IFixedReward, b: IFixedReward) =>
          Number(b.reward) - Number(a.reward)
      )
      const reward = fixedRewardState.find(
        (item) => Number(item.rank) === _index
      )
      if (reward) {
        return `${reward.reward}`
      }
      return "-"
    }
  }

  return (
    <EventCardContent
      title="Top score"
      icon={<TwitterIcon />}
      labels={{
        player_count: playerCount,
        transaction_count: transactionCount
      }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                "th": {
                  borderBottom: 0,
                  textTransform: "uppercase",
                  color: "#4E5057"
                }
              }}
            >
              <TableCell>Rank</TableCell>
              <TableCell className="w-[80px]">Amount play</TableCell>
              <TableCell className="w-[80px]">Score</TableCell>
              <TableCell className="w-[80px]">Reward</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.length > 0 ? (
              users.slice(0, 100).map((user, index) => (
                <TableRow
                  key={uuid()}
                  className="rounded-xl border-b-[6px] border-neutral-800 bg-primary-main"
                >
                  <TableCell className="w-[300px] rounded-l-xl p-1 text-end font-neue-machina-bold text-xs uppercase">
                    <div className="flex items-center">
                      <div className="mr-2 flex h-[50px] w-[50px] items-center justify-center rounded-[4px] border-[1px] border-neutral-800 bg-neutral-780 p-[4px_14px]">
                        <div className="text-center font-neue-machina-bold text-[16px] text-white-primary">
                          {index + 1}
                        </div>
                      </div>
                      {user.country && (
                        <div className="mr-2 flex h-[50px] w-[50px] items-center rounded-[4px] border-[1px] border-neutral-800 bg-neutral-780 p-[4px_14px]">
                          <Image
                            src={`/assets/flags/4x3/${user.country.toLocaleLowerCase()}.svg`}
                            alt={user.country}
                            width={50}
                            height={50}
                            title={user.country && user.country.toUpperCase()}
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>{user.username}</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-end font-neue-machina-bold text-xs uppercase">
                    <div className="text-start text-[12px] text-neutral-300">
                      {user.amount_play}
                    </div>
                  </TableCell>
                  <TableCell className="text-end font-neue-machina-bold text-xs uppercase">
                    <div className="text-start text-[12px] text-warning-dark">
                      {numberWithCommas(user.max_score)}
                    </div>
                  </TableCell>
                  <TableCell className="rounded-r-xl text-end font-neue-machina-bold text-xs uppercase">
                    <div className="text-start text-[12px] text-warning-dark">
                      {renderRewardByRank(index + 1)}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={3}
                  className="justify-center rounded-lg border border-neutral-800 bg-neutral-700 py-3 text-center"
                >
                  <NoData />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </EventCardContent>
  )
}

export default EventsTopScore
