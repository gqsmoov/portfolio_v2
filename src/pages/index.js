import React from "react"


import Layout from "../components/layout"
import Nav from "../components/nav";
import About from "../components/about";
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout page='home'>
    <SEO title="Home" />
    <Nav />
    <About />
  </Layout>
)

export default IndexPage
