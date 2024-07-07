import styled from "styled-components"
import { heroGradient } from "../../Assets/Images/Home"

const HeaderStyles = styled.header`
  position: relative;
  max-width: 1440px;
  margin-inline: auto;
  padding: 32px 20px;
  height: 100px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
`

const HeaderWrapperStyles = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  width: 100%;
  border: "1px solid #e5e5e5";
  border-bottom: 1px solid #e5e5e5;
  background-image: url(${heroGradient});
  background-color: #fff;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export { HeaderStyles, HeaderWrapperStyles }
