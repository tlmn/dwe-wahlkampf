import * as React from "react"
import Layout from "../components/layout"
import Landing from "../components/sections/landing"
import About from "../components/sections/about"
import Letter from "../components/sections/letter"

const LetterPage = () => {
  return (
    <Layout>
      <Landing />
      <About />
      <Letter />
    </Layout>
  )
}

export default LetterPage
