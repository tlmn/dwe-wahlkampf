import React from "react"

const FacebookIcon = ({ fillColor = "purple" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="61"
      viewBox="0 0 60 61"
      className={`fill-${fillColor}`}
    >
      <path
        fillRule="evenodd"
        d="M0 30.32c0 14.915 10.832 27.318 25 29.833V38.485h-7.5v-8.332H25v-6.668c0-7.5 4.832-11.665 11.667-11.665 2.166 0 4.5.333 6.666.665v7.668H39.5c-3.667 0-4.5 1.832-4.5 4.167v5.833h8l-1.333 8.332H35v21.668c14.167-2.515 25-14.915 25-29.833C60 13.728 46.5.153 30 .153S0 13.728 0 30.32z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default FacebookIcon
