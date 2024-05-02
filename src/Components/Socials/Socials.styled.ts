import styled from "styled-components"

const SocialsStyles = styled.div`
  display: flex;
  gap: 10px;
  span {
    img {
      width: 20px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(1.3);
      }
    }
  }
`

export { SocialsStyles }
