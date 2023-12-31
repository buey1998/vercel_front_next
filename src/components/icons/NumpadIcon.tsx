import * as React from "react"
import { SVGProps } from "react"

const NumpadIcon = ({
  width = 24,
  height = 24,
  className
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="#E1E2E2"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M3.6 7C3.6 5.12223 5.12223 3.6 7 3.6C8.87777 3.6 10.4 5.12223 10.4 7C10.4 8.87777 8.87777 10.4 7 10.4C5.12223 10.4 3.6 8.87777 3.6 7ZM3.6 17C3.6 15.1222 5.12223 13.6 7 13.6C8.87777 13.6 10.4 15.1222 10.4 17C10.4 18.8778 8.87777 20.4 7 20.4C5.12223 20.4 3.6 18.8778 3.6 17ZM13.6 7C13.6 5.12223 15.1222 3.6 17 3.6C18.8778 3.6 20.4 5.12223 20.4 7C20.4 8.87777 18.8778 10.4 17 10.4C15.1222 10.4 13.6 8.87777 13.6 7ZM13.6 17C13.6 15.1222 15.1222 13.6 17 13.6C18.8778 13.6 20.4 15.1222 20.4 17C20.4 18.8778 18.8778 20.4 17 20.4C15.1222 20.4 13.6 18.8778 13.6 17Z"
      stroke="#70727B"
      strokeWidth={1.2}
    />
  </svg>
)
export default NumpadIcon
