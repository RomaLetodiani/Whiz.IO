import styled from "styled-components"

interface ButtonStylesProps {
  // Define a prop to accept additional CSS attributes
  additionalStyles?: string
  variant?: "primary" | "secondary" | "danger"
}

export const ButtonStyles = styled.button<ButtonStylesProps>`
  border: none;
  border-radius: 8px;
  background: #8c64f0;
  padding: 18px 32px 15px;
  font-size: 16px;
  cursor: pointer;
  color: #ffffff;
  font-family: "mtavruliBlack";
  font-feature-settings: "case" on;
  line-height: normal;

  ${(props) => props.additionalStyles}
`
