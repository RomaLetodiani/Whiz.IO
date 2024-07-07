import { phone } from "../../../Components/Shared/icons"
import { NavBarTexts, NavBarTextsI } from "./NavBarText/Utils/NavBarTexts"
import NavBarText from "./NavBarText/NavBarText"
import { NavbarStyles } from "./Navbar.styled"
import MenuStore from "../../../Stores/Menu.Store"
import { useEffect } from "react"
import { MenuItemsTextEnum, MenuItemTitlesEnum } from "../Menu/Utils/Menu.types"

const Navbar = () => {
  const { selectedMenu, setSelectedMenu, setSubMenu } = MenuStore()

  useEffect(() => {
    switch (selectedMenu) {
      case MenuItemsTextEnum.Products:
        setSubMenu(MenuItemTitlesEnum.modules)
        break
      default:
        setSubMenu(null)
    }

    return () => {
      setSelectedMenu(null)
      setSubMenu(null)
    }
  }, [selectedMenu])

  const handleSelect = (item: NavBarTextsI) => {
    if (!item.hasData) {
      return
    }
    setSelectedMenu(selectedMenu === item.text ? null : item.text)
  }

  return (
    <NavbarStyles>
      <ul>
        {NavBarTexts.map((item, index) => (
          <NavBarText
            selected={selectedMenu === item.text}
            setSelected={() => handleSelect(item)}
            key={index}
            {...item}
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
