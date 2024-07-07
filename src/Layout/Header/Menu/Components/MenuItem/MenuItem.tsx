import { menuDataItemI } from "../../Utils/Menu.types"
import { MenuItemStyles } from "./MenuItem.styled"

const MenuItem = ({ item }: { item: menuDataItemI }) => {
  return (
    <MenuItemStyles>
      <div>
        <img src={item.icon} alt={`${item.title} - ${item.desc}`} />
      </div>
      <div className="textsDiv">
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
      </div>
    </MenuItemStyles>
  )
}

export default MenuItem
