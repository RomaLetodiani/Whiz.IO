import { dropDown } from "../../../../Components/Shared/icons"
import { NavBarTextStyles } from "./NavBarText.styled"

type NavBarTextProps = {
  item: {
    id: number
    text: string
  }
  selectedId: number
  setSelected: (id: number) => void
}

const NavBarText = ({ item, selectedId, setSelected }: NavBarTextProps) => {
  return (
    <NavBarTextStyles
      selected={item.id === selectedId}
      onClick={() => setSelected(item.id)}
      key={item.id}
    >
      <span>{item.text}</span>
      <img src={dropDown} alt="dropDown" />
    </NavBarTextStyles>
  )
}

export default NavBarText
