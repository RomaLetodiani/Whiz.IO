import { useState } from "react"
import Burger from "../../Components/Burger/Burger"
import SectionWrapper from "../../Components/SectionWrapper/SectionWrapper"
import Logo from "../../Components/Shared/Logo"
import useMediaQuery from "../../Hooks/useMediaQuery"
import useScrollPosition from "../../Hooks/useScrollPosition"
import { HeaderStyles, HeaderWrapperStyles } from "./Header.styled"
import Navbar from "./Navbar/Navbar"
import MobileMenu from "./Navbar/Mobile/MobileMenu"

const Header = () => {
  const { y } = useScrollPosition()
  const isTablet = useMediaQuery("(max-width: 1000px)")
  const [open, setOpen] = useState(false)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HeaderWrapperStyles $full={y > 50 || isTablet}>
        <SectionWrapper>
          <HeaderStyles>
            <Logo />
            {!isTablet && <Navbar />}
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
        </SectionWrapper>
      </HeaderWrapperStyles>

      <p
        style={{
          justifySelf: "center",
          alignSelf: "center",
          padding: "1rem",
          color: "red",
          border: "1px solid red",
          borderRadius: "10px",
          textAlign: "center",
          top: "15%",
          position: "absolute",
        }}
      >
        Site is Under Construction
      </p>
    </div>
  )
}

export default Header
