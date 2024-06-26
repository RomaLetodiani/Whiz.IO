import styled from "styled-components"

export const HeroStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 80px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;
  }

  > div {
    flex: 1;
  }

  .HeroTextsDiv {
    h1 {
      font-size: clamp(40px, 5vw, 48px);
      line-height: 65px;
      color: #261d44;
      max-width: 400px;

      span {
        color: #8c65f0;
      }
    }
    @media (max-width: 768px) {
      button {
        width: 100%;
      }
    }
    > p {
      font-size: 18px;
      line-height: 34px;
      margin: 16px auto clamp(48px, 5vw, 64px);
    }

    .featuresTexts {
      list-style: none;
      margin-top: 20px;
      display: flex;
      gap: 36px;
      font-size: 18px;
      line-height: 34px;

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 0;
      }

      li {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
  }

  .HeroImageDiv {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 500px;
      width: 100%;
      height: 100%;
    }
  }
`
