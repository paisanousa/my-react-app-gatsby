import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function HeadData() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `
  )

  return (
    <Helmet
      title={site.siteMetadata.title}
      meta={[
        { name: `description`, content: site.siteMetadata.description },
        { name: `keywords`, content: site.siteMetadata.keywords },
      ]}
    />
  )
}

export default HeadData
