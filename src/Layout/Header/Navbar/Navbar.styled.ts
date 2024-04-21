import styled from "styled-components"

export const NavbarStyles = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    li {
      list-style: none;
      font-weight: 600;
      font-size: 1rem;
      color: #000;
      cursor: pointer;
      display: flex;
      align-items: center;
      &.gmail-phone {
        gap: 10px;
        span {
          display: flex;
          align-items: center;
          gap: 4px;
        }
      }
    }
  }
`
