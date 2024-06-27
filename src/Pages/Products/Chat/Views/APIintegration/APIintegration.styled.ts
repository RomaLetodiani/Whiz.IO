import styled from "styled-components"

export const APIintegrationStyles = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 40px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    > div {
      flex: 1;

      p {
        max-width: 400px;
        margin-inline: auto;
      }

      img {
        width: 100%;
      }
    }
  }
`
