import React from "react"

function MobileIcon({
  width = 12,
  height = 20,
  color = "#A6A9AE",
  className
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
      <path
        d="M4 1L2 1C1.44772 1 1 1.44771 1 2L1 18C1 18.5523 1.44772 19 2 19L10 19C10.5523 19 11 18.5523 11 18L11 2C11 1.44772 10.5523 1 10 1L8 1M4 1L4 1.9C4 1.95523 4.04477 2 4.1 2L7.9 2C7.95523 2 8 1.95523 8 1.9L8 1M4 1L8 1"
        stroke={color}
        strokeWidth="1.2"
      />
    </svg>
  )
}
export default MobileIcon
