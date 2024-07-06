import { create } from "zustand"
import {
  MenuItemsTextEnum,
  MenuItemTitlesEnum,
} from "../Layout/Header/Menu/Utils/Menu.types"

interface menuStoreI {
  selectedMenu: MenuItemsTextEnum | null
  setSelectedMenu: (menu: MenuItemsTextEnum | null) => void

  subMenu: MenuItemTitlesEnum | null
  setSubMenu: (menu: MenuItemTitlesEnum | null) => void
}

const MenuStore = create<menuStoreI>()((set) => ({
  selectedMenu: null,
  setSelectedMenu: (menu) => set({ selectedMenu: menu }),

  subMenu: null,
  setSubMenu: (menu) => set({ subMenu: menu }),
}))

export default MenuStore
