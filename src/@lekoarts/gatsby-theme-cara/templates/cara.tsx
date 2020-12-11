import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero"
import Projects from "@lekoarts/gatsby-theme-cara/src/components/projects"
import About from "@lekoarts/gatsby-theme-cara/src/components/about"
import Contact from "../components/contact"
import 'bootstrap/dist/css/bootstrap.min.css'




const Cara = () => (
   <Layout >
    <Parallax pages={5.8}>
      <Hero offset={0} factor={1} />
      <About offset={0.8} factor={0.5} />
      <Projects offset={0.6} factor={3} />
      <Contact offset={3} factor={0.5} />
    </Parallax>
  </Layout>
)

export default Cara
