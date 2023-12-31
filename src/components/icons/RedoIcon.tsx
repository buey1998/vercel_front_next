import React from "react"

function RedoIcon({
  width = "18",
  height = "8",
  className
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={`fill-neutral-400 ${className}`}
    >
      <path d="M10.6 1.4C12.3 1.7 13.8 2.3 15.2 3.4L18 0.5V7.5H11L13.7 4.8C10 2.1 4.9 3 2.3 6.7C2.1 7 1.9 7.2 1.8 7.5L0 6.6C2.1 2.8 6.3 0.7 10.6 1.4Z" />
    </svg>
  )
}

export default RedoIcon
