import MenuItem from "../../Components/MenuItem/MenuItem"
import { MenuData, ProductsSubMenuData } from "../../Utils/Menu.data"
import { MenuItemsTextEnum, MenuItemTitlesEnum } from "../../Utils/Menu.types"
import {
  MenuItemsWrapper,
  MenuItemTitlesStyles,
  MenuMainStyles,
  MenuTitlesWrapper,
} from "./MenuMain.styled"

const MenuMain = ({
  selectedMenu,
  subMenu,
  setSubMenu,
}: {
  selectedMenu: MenuItemsTextEnum
  subMenu: MenuItemTitlesEnum
  setSubMenu: (subMenu: MenuItemTitlesEnum) => void
}) => {
  const handleSubMenuClick = (title: MenuItemTitlesEnum) => {
    setSubMenu(title)
  }
  return (
    <MenuMainStyles>
      <MenuTitlesWrapper>
        {ProductsSubMenuData.map((item, index) => (
          <MenuItemTitlesStyles
            onClick={() => handleSubMenuClick(item.title)}
            $selected={item.title === subMenu}
            key={index}
          >
            <p>{item.title}</p>
          </MenuItemTitlesStyles>
        ))}
      </MenuTitlesWrapper>
      <MenuItemsWrapper>
        {MenuData[selectedMenu][subMenu].map((item, index) => (
          <MenuItem item={item} key={index} />
        ))}
      </MenuItemsWrapper>
    </MenuMainStyles>
  )
}

export default MenuMain
