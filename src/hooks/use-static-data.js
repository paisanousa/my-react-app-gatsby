import { useStaticQuery, graphql } from "gatsby"

export const useStaticData = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
        allContentfulLink {
          edges {
            node {
              title
              url
            }
          }
        }
      }
    `
  )
  return data
}
