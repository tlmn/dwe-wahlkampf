import React from "react"

const Body = ({ children, className = "" }) => (
  <div className={`container py-1 my-3 text-xl leading-snug ${className}`}>
    <div className="grid grid-cols-6">
      <div
        className="col-span-full md:col-span-4 md:col-start-2"
        dangerouslySetInnerHTML={{
          __html: children,
        }}
      />
    </div>
  </div>
)

export default Body
