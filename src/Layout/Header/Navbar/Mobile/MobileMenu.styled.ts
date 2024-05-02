import styled from "styled-components"

export const MobileMenuStyles = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 1000;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s ease-in-out;

  @media (max-width: 1000px) {
    top: 98px;
  }
  @media (max-width: 768px) {
    top: 74px;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    li {
      font-size: 1.5rem;
      padding: 1rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        background: #f1f1f1;
      }
    }
  }
`
