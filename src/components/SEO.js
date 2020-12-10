import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return (
    <Helmet
      title={site.siteMetadata.title}
      meta={[
        { name: `description`, content: `Sample` },
        { name: `keywords`, content: `sample, something` },
      ]}
    />
  )
}

export default SEO
