import { create } from "zustand"
import { MenuItems } from "../Layout/Header/Navbar/NavBarText/Utils/NavBarTexts"

interface muneStoreI {
  selectedMenu: MenuItems | null
  setSelectedMenu: (menu: MenuItems) => void
}

const authStore = create<muneStoreI>()((set) => ({
  selectedMenu: null,
  setSelectedMenu: (menu) => set({ selectedMenu: menu }),
}))

export default authStore
