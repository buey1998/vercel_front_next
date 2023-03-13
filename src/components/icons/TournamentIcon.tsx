import React from "react"

function TournamentIcon({
  width = 24,
  height = 24,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 16V20H20V16M4 16L2 7C2.83333 8.33333 5.2 11 8 11C10.8 11 11.8333 6.33333 12 4C12.1667 6.33333 13.2 11 16 11C18.8 11 21.1667 8.33333 22 7L20 16M4 16H20"
        stroke="#E1E2E2"
        strokeWidth={1.2}
      />
    </svg>
  )
}

export default TournamentIcon
