import styled from "styled-components"

export const SectionWrapperStyles = styled.section<{ $paddingOn: boolean }>`
  max-width: 1440px;
  margin-inline: auto;
  padding: ${({ $paddingOn }) =>
    $paddingOn && "clamp(50px, 8vw, 80px) clamp(30px, 5vw, 50px)"};
`
