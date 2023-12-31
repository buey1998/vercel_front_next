import { SVGProps } from "react"

const LockIcon = ({
  width = 24,
  height = 24,
  className,
  stroke
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${width}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M16 12V9C16 6.79086 14.2091 5 12 5V5C9.79086 5 8 6.79086 8 9V12M16 12H8M16 12H16.9C16.9552 12 17 12.0448 17 12.1V18C17 18.5523 16.5523 19 16 19H8C7.44772 19 7 18.5523 7 18V12.1C7 12.0448 7.04477 12 7.1 12H8"
      stroke={stroke || "#E1E2E2"}
      strokeWidth={1.2}
    />
  </svg>
)
export default LockIcon
