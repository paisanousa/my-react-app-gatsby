import React from "react"
import styled from "styled-components"

const SectionGroup = styled.div`
  background: url(${({ image }) => image});
  height: 720px;
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
`
const SectionLogo = styled.img`
  align-self: end;
  width: 120px;
  margin: 0 auto;
`

const SectionTitleGroup = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  margin: 0 40px;
  grid-gap: 20px;
  grid-template-rows: auto 100%;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const SectionTitle = styled.h3`
  color: white;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;
`

const SectionText = styled.p`
  color: white;
`

const Section = ({ image, logo, title, text }) => (
  <div>
    <SectionGroup image={image}>
      <SectionLogo src={logo} />
      <SectionTitleGroup>
        <SectionTitle>{title}</SectionTitle>
        <SectionText>{text}</SectionText>
      </SectionTitleGroup>
    </SectionGroup>
  </div>
)

export default Section
