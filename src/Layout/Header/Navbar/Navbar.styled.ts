import styled from "styled-components"

export const NavbarStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  ul {
    display: flex;
    gap: 20px;
  }

  > .navBarActions {
    display: flex;
    align-items: center;
    gap: 20px;

    .gmail-phone {
      gap: 10px;
      span {
        display: flex;
        align-items: center;
        gap: 4px;
      }
      p {
        white-space: nowrap;
      }
    }
  }
`
