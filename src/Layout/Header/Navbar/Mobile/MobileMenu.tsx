import { useEffect } from "react"
import MenuStore from "../../../../Stores/Menu.Store"
import MenuMain from "../../Menu/Layout/MenuMain/MenuMain"
import NavBarText from "../NavBarText/NavBarText"
import { NavBarTexts, NavBarTextsI } from "../NavBarText/Utils/NavBarTexts"
import { MobileMenuStyles } from "./MobileMenu.styled"

const MobileMenu = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (open: boolean) => void
}) => {
  const { selectedMenu, setSelectedMenu, setSubMenu, subMenu } = MenuStore()

  useEffect(() => {
    setSelectedMenu(NavBarTexts[0].text)
    return () => {
      setSelectedMenu(null)
      setSubMenu(null)
      setOpen(false)
    }
  }, [])

  const handleSelect = (item: NavBarTextsI) => {
    if (!item.hasData) {
      return
    }
    setSelectedMenu(selectedMenu === item.text ? null : item.text)
  }

  return (
    <MobileMenuStyles open={open}>
      <ul>
        {NavBarTexts.map((item, index) => (
          <span key={index}>
            <NavBarText
              setSelected={() => handleSelect(item)}
              selected={selectedMenu === item.text}
              {...item}
            />
            {selectedMenu && subMenu && item.text === selectedMenu && (
              <MenuMain
                selectedMenu={selectedMenu}
                subMenu={subMenu}
                setSubMenu={setSubMenu}
              />
            )}
          </span>
        ))}
      </ul>
    </MobileMenuStyles>
  )
}

export default MobileMenu
