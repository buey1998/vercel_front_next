import React from "react"

function DownloadIcon({
  width = 24,
  height = 24,
  className,
  stroke
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1643_3913)">
        <mask
          id="mask0_1643_3913"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <path
            d="M8 16V24H0V0H24V24H16V16H8Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_1643_3913)">
          <path
            d="M15.6637 8.95554L15.4387 8.39932L15.6637 8.95554C16.23 8.72644 16.8495 8.6 17.5 8.6C20.2062 8.6 22.4 10.7938 22.4 13.5C22.4 16.2062 20.2062 18.4 17.5 18.4H13H8.5C4.68924 18.4 1.6 15.3108 1.6 11.5C1.6 7.68924 4.68924 4.6 8.5 4.6C11.2739 4.6 13.6668 6.23689 14.763 8.60005C14.9209 8.94053 15.3178 9.09546 15.6637 8.95554Z"
            stroke={stroke || "#E1E2E2"}
            strokeWidth="1.2"
          />
        </g>
        <path
          d="M12 20L12 12"
          stroke={stroke || "#E1E2E2"}
          strokeWidth="1.2"
        />
        <path
          d="M10.5692 20.65H13.4308L12 22.0808L10.5692 20.65Z"
          stroke={stroke || "#E1E2E2"}
          strokeWidth="1.3"
        />
      </g>
      <defs>
        <clipPath id="clip0_1643_3913">
          <rect
            width={width}
            height={height}
            stroke={stroke || "white"}
          />
        </clipPath>
      </defs>
    </svg>
  )
}
export default DownloadIcon
