import { phone } from "../../../Components/Shared/icons"
import { NavBarTexts } from "./NavBarText/Utils/NavBarTexts"
import NavBarText from "./NavBarText/NavBarText"
import { NavbarStyles } from "./Navbar.styled"

const Navbar = () => {
  return (
    <NavbarStyles>
      <ul>
        {NavBarTexts.map((item) => (
          <NavBarText
            selectedId={0}
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
            <a href="tel:+995322551441">
              <img src={phone} alt="Phone Icon" />
            </a>

            <a href="tel:+995322551441">
              <p>+995 322 551 441</p>
            </a>
          </span>
        </li>

        <li>
          <span>ქარ</span>
        </li>
      </ul>
    </NavbarStyles>
  )
}

export default Navbar
