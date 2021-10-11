import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Landing from "../components/sections/landing"
import About from "../components/sections/about"
import AboutArguments from "../components/sections/aboutArguments"
import Arguments from "../components/sections/arguments"
import Facts from "../components/sections/facts"
import Quote from "../components/sections/quote"
import Footer from "../components/sections/footer"
import Letter from "../components/sections/letter"

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <Landing />
      <About />
      <Letter />
      <AboutArguments />
      <Arguments />
      <Facts />
      <Quote />
      <Footer />
    </Layout>
  )
}

export default IndexPage
