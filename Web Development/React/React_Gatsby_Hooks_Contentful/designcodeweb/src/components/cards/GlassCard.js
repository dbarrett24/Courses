import styled from "styled-components"

export const GlassCard = styled.div`
  background: rgba(50, 61, 109, 0.5);
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
  padding: 30px;
`
