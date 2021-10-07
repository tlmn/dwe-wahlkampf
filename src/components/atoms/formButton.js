import React from "react"

const FormButton = ({ children, ...props }) => (
  <button
    {...props}
    className="block bg-purple text-yellow border-2 border-purple hover:bg-yellow hover:text-purple transition-all duration-200 ease-in-out rounded-xl py-1 px-3"
  >
    {children}
  </button>
)

export default FormButton
