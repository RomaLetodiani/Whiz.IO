import { menuDataFooter } from "../../Utils/MenuData/Footer/Footer.data"
import { MenuFooterStyles } from "./MenuFooter.styled"

const MenuFooter = () => {
  return (
    <MenuFooterStyles>
      {menuDataFooter.map((item, index) => (
        <div key={index}>
          <img src={item.icon} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </MenuFooterStyles>
  )
}

export default MenuFooter
