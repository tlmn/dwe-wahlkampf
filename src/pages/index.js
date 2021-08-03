import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/sections/header"
import Landing from "../components/sections/landing"
import About from "../components/sections/about"
import Arguments from "../components/sections/arguments"
import Facts from "../components/sections/facts"
import Footer from "../components/sections/footer"

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      {/* <Header /> */}
      <Landing />
      <About />
      <Arguments />
      <Facts />
      <Footer />
    </Layout>
  )
}

export default IndexPage
