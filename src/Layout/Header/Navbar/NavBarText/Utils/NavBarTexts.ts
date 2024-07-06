import { MenuItemsTextEnum } from "../../../Menu/Utils/Menu.types"

export interface NavBarTextsI {
  text: MenuItemsTextEnum
  hasData: boolean
}

export const NavBarTexts: NavBarTextsI[] = [
  {
    text: MenuItemsTextEnum.Products,
    hasData: true,
  },
  {
    text: MenuItemsTextEnum.Prices,
    hasData: false,
  },
  {
    text: MenuItemsTextEnum.Services,
    hasData: false,
  },
  {
    text: MenuItemsTextEnum.AboutUs,
    hasData: false,
  },
  {
    text: MenuItemsTextEnum.Contact,
    hasData: false,
  },
]
