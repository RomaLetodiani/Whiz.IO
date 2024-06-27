import styled from "styled-components"

export const IntegrateStyles = styled.div`
  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  padding: 30px;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    > div {
      flex: 1;
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .integrateTextDiv {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        line-height: 24px;
        max-width: 400px;
      }
    }

    .integrateImageDiv {
      min-width: 350px;
      max-width: 755px;
      z-index: 1;
      flex: 1;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`
