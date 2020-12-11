import React from "react"
import styled from "styled-components"

const Footer = ({ allContentfulLink }) => (
  <div>
    {allContentfulLink.edges.map(edge => (
      <a href={edge.node.url}>{edge.node.title}</a>
    ))}
  </div>
)

export default Footer
