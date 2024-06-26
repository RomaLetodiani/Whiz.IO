import styled from "styled-components"

export const NavBarTextStyles = styled.li<{ selected: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
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
