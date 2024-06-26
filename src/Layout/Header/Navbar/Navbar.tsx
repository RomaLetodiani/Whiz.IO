import Popover from "../../../Components/Popover/Popover"
import { phone } from "../../../Components/Shared/icons"
import { NavBarTexts } from "../../../Utils/NavBarTexts"
import NavBarText from "./NavBarText/NavBarText"
import { NavbarStyles } from "./Navbar.styled"

const Navbar = () => {
  return (
    <NavbarStyles>
      <ul>
        {NavBarTexts.map((item) => (
          <NavBarText
            selectedId={1}
            setSelected={() => {}}
            key={item.id}
            item={item}
          />
        ))}
        <li className="gmail-phone">
          {/* TODO: Add Gmail when needed */}
          {/* <span>
            <Popover
              position={
                full ? undefined : isDesktop ? "bottom" : "bottom-right"
              }
              content={<p>info@whizio.ge</p>}
            >
              <img src={gmail} alt="Mail Icon" />
            </Popover>

            {full && <p>info@whizio.ge</p>}
          </span> */}
          <span>
            <Popover position="bottom-right" content={<p>+995 322 551 441</p>}>
              <img src={phone} alt="Phone Icon" />
            </Popover>

            <p>+995 322 551 441</p>
          </span>
        </li>
      </ul>
    </NavbarStyles>
  )
}

export default Navbar
