/* eslint-disable react/destructuring-assignment */
import React from "react"
import { Image } from "@components/atoms/image/index"
import DieplayerIcon from "@components/icons/Tournament/DieplayerIcon"
import NakaIcon from "@components/icons/Tournament/NakaIcon"

const BoxPlayer = ({ data, index }: any) => (
  <div
    className={`flex w-full rounded-[9px] border-2  ${
      data.player_id === 2
        ? "border-error-main  bg-black-100 "
        : "border-neutral-700 bg-neutral-800 "
    }    `}
    key={index}
  >
    {data.image ? (
      <Image
        src={data.image}
        alt=""
        height={90}
        width={90}
        className={`static m-1 rounded-[9px] ${
          data.status === "lose" && "brightness-[0.2]"
        }`}
      />
    ) : (
      <div className="mx-[20px] my-[25px]">
        <NakaIcon />
      </div>
    )}

    {data.status === "lose" && (
      <div className="absolute z-40 m-[25px]">
        <DieplayerIcon />
      </div>
    )}
    <div
      className={`m-[4px] w-full overflow-hidden text-ellipsis rounded-[9px]  border-2   border-neutral-700 uppercase
              ${data.player_id === 2 ? "bg-error-main " : "bg-neutral-780 "}
              pl-2 pt-1`}
    >
      <p
        className={`truncate  ${
          data.player_id === 2 ? "text-neutral-900 " : "text-white-primary "
        }`}
      >
        {data.name ? data.name : "-"}
      </p>
      <p
        className={`text-base ${
          data.player_id === 2 ? "text-neutral-900 " : "text-black-default "
        }`}
      >
        {data.level ? <span>Level. {data.level}</span> : "-"}
      </p>
    </div>
  </div>
)
export default BoxPlayer
