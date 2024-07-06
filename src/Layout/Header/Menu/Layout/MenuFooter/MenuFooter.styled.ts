import styled from "styled-components"

export const MenuFooterStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  background-color: #f9f5ff;
  font-family: "mkhedruliMedium";

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 20px;
      height: 20px;
    }

    p {
      color: #8a63ed;
    }
  }
`
