import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {
  Provider as DataContextProvider,
  initialState,
} from "../lib/useDataContext"

const Layout = ({ children }) => {
  const [state, setState] = useState(initialState)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
