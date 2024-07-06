import MenuStore from "../../../Stores/Menu.Store"
import MenuFooter from "./Layout/MenuFooter/MenuFooter"
import MenuHeader from "./Layout/MenuHeader/MenuHeader"
import MenuMain from "./Layout/MenuMain/MenuMain"
import { MenuStyles } from "./Menu.styled"

const Menu = () => {
  const { selectedMenu, subMenu } = MenuStore()
  return (
    selectedMenu &&
    subMenu && (
      <MenuStyles>
        <MenuHeader />
        <MenuMain selectedMenu={selectedMenu} subMenu={subMenu} />
        <MenuFooter />
      </MenuStyles>
    )
  )
}

export default Menu
