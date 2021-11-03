import * as React from "react"
import Layout from "../components/layout"
import About from "../components/sections/about"
import Letter from "../components/sections/letter"
import Landing from "../components/sections/landing"
import Seo from "../components/seo"

const LetterPage = () => {
  return (
    <Layout>
      <Seo />
      <Landing showLanguageSwitch={false} />
      <About />
      <Letter />
    </Layout>
  )
}

export default LetterPage
