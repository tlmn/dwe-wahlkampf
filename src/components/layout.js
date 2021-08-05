import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import {
  Provider as DataContextProvider,
  initialState,
} from "../lib/useDataContext"

const Layout = ({ children }) => {
  const [state, setState] = useState(initialState)

  useEffect(() => (document.body.style.overflowX = "hidden"), [])

  return (
    <DataContextProvider value={{ state, setState }}>
      <div className="overscroll-x-none">{children}</div>
    </DataContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
