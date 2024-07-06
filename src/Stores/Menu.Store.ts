import { create } from "zustand"
import { NavBarTextsI } from "../Layout/Header/Navbar/NavBarText/Utils/NavBarTexts"

interface menuStoreI {
  selectedMenu: NavBarTextsI | null
  setSelectedMenu: (menu: NavBarTextsI | null) => void
}

const MenuStore = create<menuStoreI>()((set) => ({
  selectedMenu: null,
  setSelectedMenu: (menu) => set({ selectedMenu: menu }),
}))

export default MenuStore
