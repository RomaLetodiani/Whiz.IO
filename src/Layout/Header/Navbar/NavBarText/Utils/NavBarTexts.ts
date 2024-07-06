export enum MenuItemsTextEnum {
  Products = "პროდუქტები",
  Prices = "ფასები",
  Services = "სერვისები",
  AboutUs = "ჩვენს შესახებ",
  Contact = "კონტაქტი",
}

export interface NavBarTextsI {
  id: number
  text: MenuItemsTextEnum
}
export const NavBarTexts: NavBarTextsI[] = [
  {
    id: 1,
    text: MenuItemsTextEnum.Products,
  },
  {
    id: 3,
    text: MenuItemsTextEnum.Prices,
  },
  {
    id: 4,
    text: MenuItemsTextEnum.Services,
  },
  {
    id: 5,
    text: MenuItemsTextEnum.AboutUs,
  },
  {
    id: 6,
    text: MenuItemsTextEnum.Contact,
  },
]
