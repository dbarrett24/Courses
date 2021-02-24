import React from "react"
import styled from "styled-components"

export default function WaveBackground2() {
  return (
    <Wrapper>
      <Background />
      <Wave
        src="/images/waves/tutorial-wave1.svg"
        style={{top: "-50px" }}
      />
      <Wave src="/images/waves/tutorial-wave2.svg" style={{ top: "70px", filter: "blur(150px)" }} />
      <BottomWave src="/images/waves/hero-wave3.svg" style={{ top: "365px" }} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`
const Wave = styled.img`
  position: absolute;
  z-index: -1;

  @media (min-width: 1440px) {
    width: 100%;
  }
`
const BottomWave = styled(Wave)`
  @media (prefers-color-scheme: dark) {
    content: url("/images/waves/hero-wave3-dark.svg");
  }
`

const Background = styled.div`
  position: absolute;
  background: linear-gradient(200.44deg, #4316DB 13.57%, #9076E7 98.38%);
  /* background: linear-gradient(200.42deg, #E5A7E0 13.57%, #491EB8 98.35%); */
  width: 100%;
  height: 800px;
  z-index: -1;
`
