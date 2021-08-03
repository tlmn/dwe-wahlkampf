import React from "react"

const Title = ({ children, className = "" }) => (
  <div className="text-center my-3" style={{ transform: "rotate(-3deg)" }}>
    <h3
      className={`py-1 px-2 mx-auto text-3xl md:text-4xl font-bold ${className} inline leading-relaxed`}
      style={{ WebkitBoxDecorationBreak: "clone" }}
    >
      {children}
    </h3>
  </div>
)

export default Title
