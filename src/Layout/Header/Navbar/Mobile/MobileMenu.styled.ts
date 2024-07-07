import styled from "styled-components"

export const MobileMenuStyles = styled.div<{ open: boolean }>`
  position: fixed;
  top: 100px;
  right: 0;
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 100px);
  overflow: auto;
  padding: 24px 16px;
  background: #fff;
  z-index: 1000;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s ease-in-out;

  ul {
    display: flex;
    flex-direction: column;
    gap: 24px;

    span {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
`
