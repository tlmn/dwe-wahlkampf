import React from "react"
import { Link } from "gatsby"

const Button = ({ children, internal = false, link = "" }) => (
  <>
    {internal ? (
      <Link
        to={link}
        className="inline-block my-1 rounded-2xl text-yellow uppercase bg-purple py-3 px-2 hover:scale-108 animated"
      >
        {children}
      </Link>
    ) : (
      <a
        href={link}
        className="inline-block my-1 rounded-2xl text-yellow uppercase bg-purple py-3 px-2 hover:scale-108 animated"
      >
        {children}
      </a>
    )}
  </>
)

export default Button
