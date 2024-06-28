import styled from "styled-components"

export const AppealsDetailsStyles = styled.div`
  .AppealsDetailsHeader {
    h2 {
      text-align: center;
      margin-bottom: 20px;
    }

    p {
      max-width: 800px;
      margin-inline: auto;
    }
  }
  .AppealsDetailsImages {
    display: grid;
    grid-template-columns: repeat(10, auto);
    gap: 10px;
    margin-top: 20px;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(5, auto);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, auto);
    }
    div {
      height: 100px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .AppealsDetailsImageDiv {
    margin-top: 20px;
    max-width: 900px;
    margin-inline: auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
`
