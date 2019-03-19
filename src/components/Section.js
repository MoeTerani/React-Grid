import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

const SectionGroup = styled.div`
  background: url(${props => props.image});
  height: 72rem;
  background-size: cover;
  display: grid;
  grid-template-rows: 30rem auto;
  justify-content: center;
  position: relative;
`
const SectionLogo = styled.img`
  margin: 0 auto;
  width: 12.8rem;
  align-self: end;
`

const SectionTitleGroup = styled.div`
  max-width: 80rem;
  margin: 0 4rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 30rem auto;
  grid-template-rows: auto 100%;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const SectionTitle = styled.h3`
  color: white;
  font-size: 6rem;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 640px) {
    font-size: 4rem;
  }
`

const SectionText = styled.p`
  color: white;
`

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -0.6rem;
`
const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -0.6rem;
  transform: rotate(180deg);
`

const Section = props => (
  <SectionGroup image={props.image}>
    <WaveTop>
      <Wave />
    </WaveTop>
    <WaveBottom>
      <Wave />
    </WaveBottom>
    <SectionLogo src={props.logo} />
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
  </SectionGroup>
)

export default Section
