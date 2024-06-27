import styled from "styled-components"
import { heroGradient } from "../../../../Assets/Images/Home"

export const BottomBannerStyles = styled.div`
  position: relative;
  overflow: hidden;
  .blurBg {
    background-image: url(${heroGradient});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
  }

  > section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0;
      margin: 20px 0 0 20px;
    }

    > div {
      flex: 1;
    }

    .textDiv {
      max-width: 584px;
      > h2 {
        font-size: clamp(22px, 3vw, 32px);
        line-height: 48px;
        margin-bottom: 20px;
        @media (max-width: 768px) {
          line-height: 34px;
        }
        span {
          color: #8c65f0;
        }
      }
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 20px;
        li {
          max-width: 400px;
          line-height: 34px;
          color: #261d44;
          span {
            font-family: "mtavruliBold";
          }
        }
      }
    }
    .imgDiv {
      display: flex;
      max-width: 500px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`
