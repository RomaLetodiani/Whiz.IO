import styled from "styled-components"
import logo from "../../Assets/Images/WHIZIO.svg"
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to="/">
      <LogoStyles>
        <img src={logo} alt="Whiz.io Logo" />
      </LogoStyles>
    </Link>
  )
}

export default Logo

const LogoStyles = styled.div`
  img {
    width: clamp(130px, 10vw, 170px);
  }
`
