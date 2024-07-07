import MenuStore from "../../../Stores/Menu.Store"
import MenuFooter from "./Layout/MenuFooter/MenuFooter"
import MenuHeader from "./Layout/MenuHeader/MenuHeader"
import MenuMain from "./Layout/MenuMain/MenuMain"
import { MenuStyles } from "./Menu.styled"

const Menu = () => {
  const { selectedMenu, subMenu, setSubMenu } = MenuStore()
  return (
    selectedMenu &&
    subMenu && (
      <MenuStyles>
        <MenuHeader />
        <MenuMain
          selectedMenu={selectedMenu}
          subMenu={subMenu}
          setSubMenu={setSubMenu}
        />
        <MenuFooter />
      </MenuStyles>
    )
  )
}

export default Menu
