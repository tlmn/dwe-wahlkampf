import React from "react"

const Arrow = ({ className, fillColor = "purple" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="83"
      height="60"
      fill="none"
      viewBox="0 0 83 60"
      className={`animated ${className} fill-${fillColor}`}
    >
      <path
        fillRule="evenodd"
        d="M55.62 1.692l25.441 25.456a4.002 4.002 0 010 5.656L55.621 58.26a3.996 3.996 0 01-5.654 0 4.002 4.002 0 010-5.657l18.617-18.627H.566v-8h68.018L49.967 7.35a4.002 4.002 0 010-5.657 3.996 3.996 0 015.654 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default Arrow
