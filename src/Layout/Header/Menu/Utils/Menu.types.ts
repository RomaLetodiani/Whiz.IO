export enum MenuItemsTextEnum {
  Products = "პროდუქტები",
  Prices = "ფასები",
  Services = "სერვისები",
  AboutUs = "ჩვენს შესახებ",
  Contact = "კონტაქტი",
}

export enum MenuItemTitlesEnum {
  communicationChannels = "კომუნიკაციის არხები",
  modules = "მოდულები",
  decisions = "გადაწყვეტილებები",
  sectors = "სექტორები",
}

export type menuDataI = {
  [key in MenuItemsTextEnum]: menuDataObjectI
}

export interface menuDataItemI {
  icon: string
  title: string
  desc: string
}

export type menuDataObjectI = {
  [key in MenuItemTitlesEnum]: menuDataItemI[]
}
