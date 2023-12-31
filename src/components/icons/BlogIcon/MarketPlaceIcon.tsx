import React from "react"

function MarketPlaceIcon({
  width = 24,
  height = 24,
  className
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.4 20C8.4 20.7732 7.7732 21.4 7 21.4C6.2268 21.4 5.6 20.7732 5.6 20C5.6 19.2268 6.2268 18.6 7 18.6C7.7732 18.6 8.4 19.2268 8.4 20ZM18.4 20C18.4 20.7732 17.7732 21.4 17 21.4C16.2268 21.4 15.6 20.7732 15.6 20C15.6 19.2268 16.2268 18.6 17 18.6C17.7732 18.6 18.4 19.2268 18.4 20Z"
        stroke="#E1E2E2"
        strokeWidth="1.2"
      />
      <path
        d="M1 3H3.5L4.5 5M4.5 5H19.8277C19.9045 5 19.9526 5.08295 19.9145 5.14961L16 12H8L7.5 11M4.5 5L7.5 11M19 16H6.61803C5.87465 16 5.39116 15.2177 5.72361 14.5528L7.5 11"
        stroke="#E1E2E2"
        strokeWidth="1.2"
      />
    </svg>
  )
}
export default MarketPlaceIcon
