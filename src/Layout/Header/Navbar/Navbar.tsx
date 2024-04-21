import Popover from "../../../Components/Popover/Popover"
import { dropDown, gmail, phone } from "../../../Components/Shared/icons"
import useMediaQuery from "../../../Hooks/useMediaQuery"
import useScrollPosition from "../../../Hooks/useScrollPosition"
import { NavbarStyles } from "./Navbar.styled"

const Navbar = () => {
  const { y } = useScrollPosition()
  const isDesktop = useMediaQuery("(min-width: 1200px)")
  const full = isDesktop && y > 50

  return (
    <NavbarStyles>
      <ul>
        <li>
          <span>პროდუქტი</span>
          <img src={dropDown} alt="dropDown" />
        </li>
        <li>ფასები</li>
        <li>
          ინტეგრაციები
          <img src={dropDown} alt="dropDown" />
        </li>
        <li>
          მომხმარებლები
          <img src={dropDown} alt="dropDown" />
        </li>
        <li>
          რესურსები
          <img src={dropDown} alt="dropDown" />
        </li>
        <li className="gmail-phone">
          <span>
            <Popover
              position={
                full ? undefined : isDesktop ? "bottom" : "bottom-right"
              }
              content={<p>info@whizio.ge</p>}
            >
              <img src={gmail} alt="Mail Icon" />
            </Popover>

            {full && <p>info@whizio.ge</p>}
          </span>
          <span>
            <Popover
              position={full ? undefined : "bottom-right"}
              content={<p>0 322 500 503</p>}
            >
              <img src={phone} alt="Phone Icon" />
            </Popover>

            {full && <p>0 322 500 503</p>}
          </span>
        </li>
      </ul>
    </NavbarStyles>
  )
}

export default Navbar
