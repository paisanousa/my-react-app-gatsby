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
      <Footer allContentfulLink={allContentfulLink} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
