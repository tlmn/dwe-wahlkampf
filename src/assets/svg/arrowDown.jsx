import React from "react"

const ArrowDown = ({ fillColor = "yellow", width = "20", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    fill="none"
    viewBox="0 0 264 268"
    {...props}
  >
    <g className={`fill-${fillColor}`}>
      <path
        fillRule="evenodd"
        d="M.302 133.833C.302 59.921 59.197 0 131.844 0c72.647 0 131.542 59.92 131.542 133.833s-58.895 133.834-131.542 133.834C59.197 267.667.302 207.746.302 133.833z"
        clipRule="evenodd"
      ></path>
    </g>
    <g className={`fill-${fillColor === "yellow" ? `purple` : `yellow`}`}>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M182.892 160.099l-45.803 45.793a7.196 7.196 0 01-10.178 0l-45.803-45.793a7.196 7.196 0 010-10.177 7.198 7.198 0 0110.178 0l33.517 33.51V61h14.394v122.432l33.517-33.51a7.198 7.198 0 0110.178 0 7.195 7.195 0 010 10.177z"
        clipRule="evenodd"
      ></path>
    </g>
  </svg>
)

export default ArrowDown
