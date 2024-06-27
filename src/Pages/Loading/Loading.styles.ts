import styled from "styled-components"

export const LoadingStyles = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    text-align: center;
    border: dotted 4px #000;
    padding: 64px 40px;
    border-radius: 100%;
  }
`
