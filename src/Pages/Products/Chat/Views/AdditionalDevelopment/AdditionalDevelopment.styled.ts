import styled from "styled-components"

export const AdditionalDevelopmentStyles = styled.div`
  h2 {
    text-align: center;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
      padding-block: 0px;
    }

    > div {
      flex: 1;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      p {
        max-width: 400px;
        margin-inline: auto;
      }
    }
  }
`
