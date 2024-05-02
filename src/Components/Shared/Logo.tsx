import styled from "styled-components"
import logo from "../../Assets/Images/WHIZIO.svg"

const Logo = () => {
  return (
    <LogoStyles>
      <img src={logo} alt="Whiz.io Logo" />
    </LogoStyles>
  )
}

export default Logo

const LogoStyles = styled.div`
  img {
    width: clamp(130px, 10vw, 170px);
  }
`
