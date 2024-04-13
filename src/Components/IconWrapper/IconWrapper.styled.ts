import styled from "styled-components"

interface IconWrapperStylesI {
  $additionalStyles?: string
}

const IconWrapperStyles = styled.div<IconWrapperStylesI>`
  width: clamp(28px, 5vw, 48px);
  height: clamp(28px, 5vw, 48px);
  padding: clamp(6px, 1vw, 12px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 48px;
  background: #ffffff;

  /* Shadows/shadow-sm */
  box-shadow: 0px 2px 10px rgba(197, 177, 247, 0.5),
    0px 2px 10px rgba(197, 177, 247, 0.5);

  img {
    width: 100%;
    height: 100%;
  }

  ${(props) => props.$additionalStyles}
`

export default IconWrapperStyles
