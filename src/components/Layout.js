import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticData } from "../hooks/use-static-data"

import Header from "./Header"

import "./Layout.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const { site, allContentfulLink } = useStaticData()
  return (
    <>
      <Helmet
        title={site.siteMetadata.title}
        meta={[
          { name: `description`, content: site.siteMetadata.description },
          { name: `keywords`, content: site.siteMetadata.keywords },
        ]}
      />
      <Header />
      <main>{children}</main>
      <Footer allContentfulLink={allContentfulLink}>
        Backgrounds made in Cinema 4D, iOS app in Swift, site in React.{" "}
        <a href="mailto:support@designcode.io">Email us</a> to ask anything. ©
        2018
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
