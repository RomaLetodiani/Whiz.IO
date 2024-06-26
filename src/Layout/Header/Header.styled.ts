import styled from "styled-components"
import gradient from "../../Assets/Images/Home/heroGradient.png"

const HeaderStyles = styled.header`
  padding: 32px 20px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 20px;
  }
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
  background-image: url(${gradient});
  background-color: #fff;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
`

export { HeaderStyles, HeaderWrapperStyles }
