import logo from "../../Assets/Images/WHIZIO.svg"

import SectionWrapper from "../../Components/SectionWrapper/SectionWrapper"
import useMediaQuery from "../../Hooks/useMediaQuery"
import useScrollPosition from "../../Hooks/useScrollPosition"
import { HeaderStyles, HeaderWrapperStyles, Logo } from "./Header.styled"
import Navbar from "./Navbar/Navbar"

const Header = () => {
  const { y } = useScrollPosition()
  const isTablet = useMediaQuery("(max-width: 900px)")
  return (
    <HeaderWrapperStyles $full={y > 50 || isTablet}>
      <SectionWrapper>
        <HeaderStyles>
          <Logo>
            <img src={logo} alt="Whiz.io Logo" />
          </Logo>
          {!isTablet && <Navbar />}
          {isTablet && <button>burger</button>}
        </HeaderStyles>
      </SectionWrapper>
    </HeaderWrapperStyles>
  )
}

export default Header
