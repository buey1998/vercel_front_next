import React from "react"

function VectorIcon({
  width = 16,
  height = 16
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
        d="M8.0877 16C7.83537 16 7.62208 15.8173 7.56097 15.5725C7.3662 14.7922 6.99333 13.9625 6.44238 13.0834C5.78961 12.0278 4.85905 11.0486 3.65072 10.1458C2.59977 9.35152 1.54883 8.80984 0.497893 8.52088C0.248987 8.45248 0.0673828 8.23176 0.0673828 7.97362C0.0673828 7.72053 0.242001 7.50236 0.485361 7.43287C1.51574 7.13868 2.50836 6.66105 3.46321 6C4.56044 5.23611 5.4771 4.31944 6.21321 3.25C6.86441 2.29732 7.31144 1.3551 7.55429 0.423366C7.6179 0.179276 7.83279 0 8.08506 0C8.3401 0 8.5565 0.183246 8.61858 0.430664C8.75874 0.989232 8.97778 1.56096 9.2757 2.14583C9.65074 2.86806 10.1299 3.5625 10.7132 4.22917C11.3104 4.88194 11.9771 5.47222 12.7132 6C13.6751 6.68185 14.653 7.16089 15.6469 7.43712C15.8907 7.50487 16.0674 7.72195 16.0674 7.97499C16.0674 8.23184 15.8854 8.45072 15.6377 8.51864C15.0077 8.69136 14.3592 8.96992 13.6924 9.35416C12.8868 9.8264 12.1368 10.3889 11.4423 11.0417C10.7479 11.6806 10.1785 12.3542 9.73402 13.0625C9.18202 13.9434 8.80874 14.7796 8.61434 15.5711C8.55402 15.8166 8.34042 16 8.0877 16Z"
        fill="#4E5057"
      />
    </svg>
  )
}
export default VectorIcon