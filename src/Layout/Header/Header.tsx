import { useState } from "react"
import Burger from "../../Components/Burger/Burger"
import Logo from "../../Components/Shared/Logo"
import useMediaQuery from "../../Hooks/useMediaQuery"
import { HeaderStyles, HeaderWrapperStyles } from "./Header.styled"
import Navbar from "./Navbar/Navbar"
import MobileMenu from "./Navbar/Mobile/MobileMenu"
import Menu from "./Menu/Menu"

const Header = () => {
  const isTablet = useMediaQuery("(max-width: 1000px)")
  const [open, setOpen] = useState(false)
  return (
    <HeaderWrapperStyles>
      <HeaderStyles>
        <span className="logoContainer">
          <Logo />
        </span>
        {!isTablet && (
          <>
            <Navbar />
            <Menu />
          </>
        )}
        {isTablet && (
          <>
            <Burger
              open={open}
              onBurgerClick={() => setOpen((prev) => !prev)}
            />
            <MobileMenu open={open} />
          </>
        )}
      </HeaderStyles>
    </HeaderWrapperStyles>
  )
}

export default Header
