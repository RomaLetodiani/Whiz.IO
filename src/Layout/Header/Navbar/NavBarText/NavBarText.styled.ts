import styled from "styled-components"

export const NavBarTextStyles = styled.li<{ selected: boolean }>`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  line-height: 24px;

  transition: 0.3s;

  span {
    color: ${(props) => props.selected && "#7F56D9"};
  }

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
