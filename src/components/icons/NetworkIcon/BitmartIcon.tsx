import React from "react"

function BitmartIcon({
  width = 24,
  height = 24
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2071_2797)">
        <path
          d="M23.6127 15.3124L18.4238 5.52897C17.2867 3.48914 14.512 3.46717 13.4136 5.61503L7.96533 15.7885C6.94778 17.6544 8.20455 19.9964 10.2413 19.9964H21.1581C23.2134 19.9964 24.7498 17.5885 23.6127 15.3106"
          fill="#00B897"
        />
        <path
          d="M16.1277 16.0728L15.8076 15.4649C15.5078 14.9009 14.849 13.6869 14.849 13.6869L10.4588 5.39943C9.3216 3.55553 6.6261 3.40355 5.48894 5.72536L0.379297 15.3367C-0.678684 17.3546 0.57809 19.9785 2.87431 20.0005H21.1177C18.3026 20.0225 17.4047 18.4386 16.1277 16.0746"
          fill="#76FCB2"
        />
      </g>
      <defs>
        <clipPath id="clip0_2071_2797">
          <rect
            width="24"
            height="16"
            fill="white"
            transform="translate(0 4)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default BitmartIcon
