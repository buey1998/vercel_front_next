import React from "react"

function UndoIcon({
  width = "19",
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
      <path d="M7.4 1.4C5.7 1.7 4.2 2.3 2.8 3.4L0 0.5V7.5H7L4.3 4.8C8 2.2 13.1 3 15.8 6.7C16 7 16.2 7.2 16.3 7.5L18.1 6.6C15.9 2.8 11.7 0.7 7.4 1.4Z" />
    </svg>
  )
}

export default UndoIcon
