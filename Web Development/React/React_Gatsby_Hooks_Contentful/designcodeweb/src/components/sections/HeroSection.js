import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`
const Title = styled.h1`
  font-weight: 600;
  font-size: 60px;
  color: white;
`
const Description = styled.p`
  font-size: 17px;
  line-height: 130%;
`

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design
            <br /> and code React apps
          </Title>
          <Description>
            Don't skip design. Learn design and code, by building real apps with
            React and Swift. Complete courses about the best tools.
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection
