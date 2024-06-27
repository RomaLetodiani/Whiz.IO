import styled from "styled-components"

export const UserIdentificationStyles = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 40px;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding-block: 50px;
    @media (max-width: 768px) {
      flex-direction: column;
      padding-block: 0px;
    }

    > div {
      flex: 1;
    }

    .userIdentificationImageDiv {
      max-width: 900px;
      @media (max-width: 768px) {
        padding-right: 100px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }

    .userIdentificationTextDiv {
      max-width: 400px;
      margin-inline: auto;
    }
  }
`
