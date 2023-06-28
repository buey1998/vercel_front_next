import React from "react"

function AllCategoriesIcon({
  width = 24,
  height = 24
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 2V4.9C3 4.95523 3.04477 5 3.1 5H20.9C20.9552 5 21 4.95523 21 4.9V2M3 22V19.1C3 19.0448 3.04477 19 3.1 19H20.9C20.9552 19 21 19.0448 21 19.1V22"
        stroke="#70727B"
        strokeWidth="1.2"
      />
      <path
        d="M3 15V9C3 8.44772 3.44772 8 4 8H20C20.5523 8 21 8.44772 21 9V15C21 15.5523 20.5523 16 20 16H4C3.44772 16 3 15.5523 3 15Z"
        stroke="#70727B"
        strokeWidth="1.2"
      />
    </svg>
  )
}
export default AllCategoriesIcon