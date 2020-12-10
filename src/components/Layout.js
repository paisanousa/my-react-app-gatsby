import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticData } from "../hooks/use-static-data"

import Header from "./Header"

import "./Layout.css"

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
      {allContentfulLink.edges.map(edge => (
        <a href={edge.node.url}>{edge.node.title}</a>
      ))}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
