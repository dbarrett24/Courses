import React from "react"
import styled, { keyframes } from "styled-components"
import MockupAnimation from "../animations/MockupAnimation"
import WaveBackground from "../backgrounds/WaveBackground"
import PurchaseButton from "../buttons/PurchaseButton"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"

const Wrapper = styled.div`
  overflow: hidden;
`
const animation = keyframes`
  0% {opacity: 0; transform: translateY(-10px); }
  100% {opacity: 1; transform: translateY(0px);}
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  > *{
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1){
      animation-delay: 0s;
    }
    :nth-child(2){
      animation-delay: 0.2s;
    }
    :nth-child(3){
      animation-delay: 0.4s;
    }

  }
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301CBE 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  
  span{
    background: linear-gradient(180deg, #FFD7FF 0%, #FFB6FF 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 48px;
  }
`
const Description = styled(MediumText)`
  font-size: 17px;
  line-height: 130%;
`


function HeroSection() {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design
            <br /> and code <span>React</span> apps
          </Title>
          <Description>
            Don't skip design. Learn design and code, by building real apps with
            React and Swift. Complete courses about the best tools.
          </Description>
          <PurchaseButton
            title="Start learning"
            subtitle="120+ hours of video"
          />
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection
