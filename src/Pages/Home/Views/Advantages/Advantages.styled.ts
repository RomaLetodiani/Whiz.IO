import styled from "styled-components"

export const AdvantagesStyles = styled.div`
  padding: clamp(50px, 8vw, 80px) clamp(30px, 5vw, 50px);

  > h2 {
    text-align: center;
    font-size: clamp(24px, 2vw, 32px);
    font-weight: 900;
    line-height: 48px;
    color: #261d44;

    @media (max-width: 768px) {
      text-align: left;
      line-height: 36px;
    }

    span {
      color: #8c64f0;
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    > div {
      flex: 1;
    }

    .textDiv {
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 20px;
        li {
          max-width: 80%;
          color: #261d44;
          line-height: 34px;
          font-family: "mkhedruliLight";
          > span {
            font-family: "mkhedruliBold";
          }
        }
      }
    }

    .imgDiv {
      display: flex;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`
