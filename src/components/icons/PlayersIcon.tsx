import { SVGProps } from "react"

const PlayersIcon = ({
  width = 24,
  height = 24,
  className,
  stroke
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M1 21C2.00155 17.5515 4.98065 15.05 8.5 15.05C11.0329 15.05 13.286 16.3457 14.7234 18.3577M16 21C15.7193 20.0334 15.2832 19.1412 14.7234 18.3577M23 21C22.3323 18.7686 20.3462 17.15 18 17.15C16.7601 17.15 15.6207 17.6021 14.7234 18.3577M12.6667 8.25C12.6667 10.5972 10.8012 12.5 8.5 12.5C6.19881 12.5 4.33333 10.5972 4.33333 8.25C4.33333 5.90279 6.19881 4 8.5 4C10.8012 4 12.6667 5.90279 12.6667 8.25ZM20.7778 11.75C20.7778 13.2688 19.5341 14.5 18 14.5C16.4659 14.5 15.2222 13.2688 15.2222 11.75C15.2222 10.2312 16.4659 9 18 9C19.5341 9 20.7778 10.2312 20.7778 11.75Z"
      stroke={stroke || "#70727B"}
      strokeWidth={1.2}
    />
  </svg>
)
export default PlayersIcon
