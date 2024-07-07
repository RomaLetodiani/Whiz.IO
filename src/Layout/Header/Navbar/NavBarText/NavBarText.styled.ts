import styled from "styled-components"

export const NavBarTextStyles = styled.li<{ selected: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: clamp(12px, 1.5vw, 16px);
  cursor: pointer;
  display: flex;
  align-items: center;

  transition: 0.3s;
  color: ${(props) => (props.selected ? "var(--primary)" : "var(--black)")};

  &:hover {
    color: var(--primary);
  }
  img {
    margin-left: 5px;
    transition: 0.3s;
    transform: ${(props) =>
      props.selected ? "rotate(180deg)" : "rotate(0deg)"};
  }
`
