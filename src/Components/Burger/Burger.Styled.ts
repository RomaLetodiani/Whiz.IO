import styled from "styled-components"

interface BurgerStylesProps {
  open: boolean
}

export const BurgerStyles = styled.button<BurgerStylesProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;

  div {
    width: 100%;
    height: 3px;
    background: #261d44;
    transition: all 0.3s ease-out;
    border-radius: 10px;
    position: ${({ open }) => (open ? "absolute" : "relative")};
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg) " : "rotate(0)")};
      top: ${({ open }) => (open ? "50%" : "0")};
    }

    &:nth-child(2) {
      display: ${({ open }) => (open ? "none" : "block")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      top: ${({ open }) => (open ? "50%" : "0")};
    }
  }
`
