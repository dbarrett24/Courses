import React from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { GlassCard } from "../components/cards/GlassCard"
import { themes } from "../components/styles/ColorStyles"
import { H2, MediumText } from "../components/styles/TextStyles"
import WaveBackground2 from "../components/backgrounds/WaveBackground2"
import MenuButton from "../components/buttons/MenuButton"

export default function SecondPage() {
  return (
    <Layout>
      <SEO title="Coming Soon" />
      <Wrapper>
        <WaveBackground2 />
        <ContentWrapper>
          <GlassCardWrapper>
            <TextWrapper>
              <Title>Coming Soon</Title>
              <Description>
                This page is being worked on. Check back later to see what's
                new.
              </Description>
              <MenuButton
                item={{
                  title: "Go back to the homepage",
                  icon: "/images/icons/home.svg",
                  link: "/",
                }}
              ></MenuButton>
            </TextWrapper>
            <Graphic>
              <img src="/images/icons/settings.svg" alt="Settings Icon" />
              <img src="/images/icons/code.svg" alt="Code Icon" />
              <img src="/images/icons/more.svg" alt="More Icon" />
            </Graphic>
          </GlassCardWrapper>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;

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
`

const Title = styled(H2)`
  color: ${themes.dark.text1};
`

const Description = styled(MediumText)`
  color: ${themes.dark.text2};
  font-size: 17px;
  line-height: 130%;
`
const GlassCardWrapper = styled(GlassCard)`
  display: grid;
  grid-template-columns: auto 200px;
  gap: 30px;

  @media (max-width: 650px) {
    grid-template-columns: auto;
    gap: 30px;
  }
`

const rotateAnimation = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
    opacity: 0.3;
  }
`

const breathingScale = keyframes`
  0% {
    transform: scale(1) rotate(10deg) translateY(0px);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.1) rotate(0deg) translateY(5px);
    opacity: 0.3;
    
  }
  100% {
    transform: scale(1) rotate(10deg) translateY(0px);
    opacity: 0.6;
  }
`
const breathingSkew = keyframes`
  0% {
    transform: scale(1) rotate(-13deg) translateX(0px);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.1) rotate(0deg) translateX(15px);
    opacity: 0.5;
    
  }
  100% {
    transform: scale(1) rotate(-13deg) translateX(0px);
    opacity: 0.2;
    
  }
`
const Graphic = styled.div`
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  @media (max-width: 650px) {
    display: flex;
    justify-content: center;
  }

  > img {
    position: absolute;

    @media (max-width: 650px) {
      position: relative;
    }

    :nth-child(1) {
      width: 100px;
      height: 100px;
      top: 0;
      right: 32px;
      animation: ${rotateAnimation} 10s linear infinite;

      @media (max-width: 650px) {
        top: 0;
        left: 14%;
        right: 14%;
        bottom: 0;
      }
    }
    :nth-child(2) {
      width: 50px;
      height: 50px;
      left: 14px;
      animation: ${breathingScale} 4s ease-in-out infinite;

      @media (max-width: 650px) {
        top: 0;
        left: 70px;
      }
    }
    :nth-child(3) {
      width: 60px;
      height: 60px;
      bottom: 10px;
      left: 90px;
      animation: ${breathingSkew} 4s ease-in-out infinite;

      @media (max-width: 650px) {
        top: -8px;
        left: -191px;
      }
    }
  }
`
