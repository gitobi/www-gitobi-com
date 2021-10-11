import React from "react"

import { Helmet } from "react-helmet"

import Footer from "../organisms/footer"
import Header from "../organisms/header"
import Main from "../organisms/main"

import "sanitize.css"
import "sanitize.css/forms.css"
import "sanitize.css/assets.css"
import "./base-layout.scss"

const BaseLayout = ({ children }) => {
  return (
    <>
      <Helmet
        htmlAttributes={{ lang: "ja" }}
      />
      <Header />
      <Main children={children} />
      <Footer />
    </>
  )
}

export default BaseLayout
