import styled from "styled-components"

export const PurpleBannerStyles = styled.div`
  background: linear-gradient(90deg, #281e47 0%, #8863ed 100%);
  > section {
    padding-left: clamp(30px, 3vw, 80px);
    display: flex;
    justify-content: space-between;
    /* gap: 20px; */
    color: #eaeae9;

    > div {
      flex: 1;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      padding: 20px 20px 0;
      gap: 40px;
    }

    .TextsDiv {
      max-width: 500px;
      align-self: center;

      @media (min-width: 769px) and (max-width: 1024px) {
        transform: scale(0.8);
      }

      h2 {
        font-size: clamp(22px, 3vw, 32px);
        line-height: 48px;
        font-family: "mtavruliBlack";
        font-feature-settings: "case" on;
        margin-bottom: 20px;
        span {
          color: #8c65f0;
        }
      }
      > ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 20px;
        > li {
          display: flex;
          align-items: start;
          gap: 8px;
          img {
            filter: brightness(100);
            margin-top: 5px;
          }
          p {
            line-height: 34px;
            > span {
              font-family: "mkhedruliBold";
            }
          }
        }
      }
    }
    .imgDiv {
      display: flex;
      justify-content: center;
      align-items: end;
      max-width: 700px;
      img {
        @media (min-width: 769px) and (max-width: 923px) {
          max-height: 90%;
        }
        width: 100%;
        height: 100%;
      }
    }
  }
`
