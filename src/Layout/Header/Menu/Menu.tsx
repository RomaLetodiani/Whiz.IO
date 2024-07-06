import MenuStore from "../../../Stores/Menu.Store"
import { MenuStyles } from "./Menu.styled"
import { MenuData } from "./Utils/Menu.data"

const Menu = () => {
  const { selectedMenu, subMenu } = MenuStore()
  return (
    selectedMenu &&
    subMenu && (
      <MenuStyles>{MenuData[selectedMenu][subMenu][0].title}</MenuStyles>
    )
  )
}

export default Menu
