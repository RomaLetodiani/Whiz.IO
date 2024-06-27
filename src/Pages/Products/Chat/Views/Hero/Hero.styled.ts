import styled from "styled-components"

export const HeroStyles = styled.div`
  padding: 50px;

  @media (max-width: 768px) {
    padding: 0px;
  }

  h1 {
    line-height: 4rem;
    font-size: 3rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 2rem;
      line-height: 40px;
      text-align: start;
    }
  }

  h2 {
    text-align: center;
  }

  div {
    &:first-child {
      p {
        font-family: "mkhedruliMedium", sans-serif;
        margin: 2rem 0;
        max-width: 900px;
        margin: auto;
        line-height: 34px;
        margin-bottom: 3rem;
      }
    }

    &:last-child {
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;

        .brandingImageDiv {
          min-width: 350px;
          z-index: 1;
          flex: 1;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .brandingTexts {
          flex: 1;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          .blob {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            @media (max-width: 768px) {
              display: none;
            }
          }
          p {
            max-width: 400px;
            line-height: 24px;
            z-index: 1;
          }
        }

        @media (max-width: 768px) {
          flex-direction: column;
        }
      }
    }
  }
`
