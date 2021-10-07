import React from "react"

const LinkButton = ({ children, ...props }) => (
  <a
    {...props}
    className="block bg-purple text-yellow border-2 border-purple hover:bg-yellow hover:text-purple transition-all duration-200 ease-in-out rounded-xl py-1 px-3"
  >
    {children}
  </a>
)

export default LinkButton
