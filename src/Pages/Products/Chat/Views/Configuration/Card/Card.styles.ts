import styled from "styled-components"

export const CardStyles = styled.div`
  max-width: 469px;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  border: 0.7px solid rgba(163, 177, 193, 0.5);
  background: #f4f3ff;
  box-shadow: 0px 11px 18px -3px rgba(16, 24, 40, 0.08),
    0px 9px 9px -3px rgba(16, 24, 40, 0.03);

  .CardHeader {
    min-height: 83px;
    padding: 16px 20px;
    h3 {
      color: #4d6887;
      font-family: "mtavruliBlack";
      font-size: 14px;
      line-height: 23px;
    }
  }

  .CardImageDiv {
    flex: 1;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .CardFooter {
    display: flex;
    min-height: 180px;
    padding: 16px var(--spacing-2xl, 20px);
    align-items: flex-start;
    gap: 10px;
    flex-shrink: 0;
    background: #fff;

    p {
      font-family: "mkhedruliRegular";
      line-height: 25px;
      font-size: 14px;
    }
  }
`
