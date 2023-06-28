import React from "react"

interface IProps {
  fill?: string
  onClick?: () => void
}

const HeartFilledIcon = ({ fill = "#F32429", onClick }: IProps) => (
  <svg
    width="20"
    height="19"
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M19.8889 6.37964C19.8889 7.91753 19.2984 9.39468 18.2439 10.4874C15.8165 13.0034 13.4622 15.6271 10.9442 18.0519C10.367 18.5997 9.4514 18.5797 8.89909 18.0072L1.64457 10.4874C-0.54819 8.21437 -0.54819 4.5449 1.64457 2.27194C3.85888 -0.0233597 7.46623 -0.0233597 9.68052 2.27194L9.94425 2.54526L10.2078 2.2721C11.2694 1.17102 12.7154 0.549988 14.2258 0.549988C15.7363 0.549988 17.1821 1.17096 18.2439 2.27194C19.2985 3.36471 19.8889 4.84178 19.8889 6.37964Z"
      fill={fill}
    />
  </svg>
)

export default HeartFilledIcon
