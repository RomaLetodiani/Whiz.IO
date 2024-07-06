import { dropDown } from "../../../../Components/Shared/icons"
import { MenuItemsTextEnum } from "../../Menu/Utils/Menu.types"
import { NavBarTextStyles } from "./NavBarText.styled"

type NavBarTextProps = {
  text: MenuItemsTextEnum
  hasData: boolean
  selected: boolean
  setSelected: () => void
}

const NavBarText = ({
  text,
  hasData,
  selected,
  setSelected,
}: NavBarTextProps) => {
  return (
    <NavBarTextStyles selected={selected} onClick={setSelected}>
      <span>{text}</span>
      {hasData && <img src={dropDown} alt="dropDown" />}
    </NavBarTextStyles>
  )
}

export default NavBarText
