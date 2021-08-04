import React, { useRef, useState, useEffect } from "react"

const Number = ({ children, className = "" }) => {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    setWidth(ref.current.clientHeight)
    console.log(width)
  }, [])
  return (
    <h3
      className={`rounded-full ${className} font-bold text-4xl py-2 inline-block`}
      ref={ref}
      style={{ width: `${width}px` }}
    >
      {children}
    </h3>
  )
}

export default Number