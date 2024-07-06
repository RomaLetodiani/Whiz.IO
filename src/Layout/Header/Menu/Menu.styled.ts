import styled from "styled-components"

export const MenuStyles = styled.div`
  position: absolute;
  top: 100%;
  background-color: red;
  width: calc(100% - 40px);
  padding: 20px;
  border-radius: 0 0 10px 10px;
  border: 1px solid var(--Gray-200, #eaecf0);
  background: #fff;

  /* Shadow/lg */
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03);
`
