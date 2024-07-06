import { menuDataI, MenuItemTitlesEnum, MenuItemsTextEnum } from "./Menu.types"
import { initial } from "./MenuData/Dummy"
import { communicationChannels } from "./MenuData/Products/CommunicationChannels.data"
import { decisions } from "./MenuData/Products/Decisions.data"
import { Modules } from "./MenuData/Products/Modules.data"
import { sectors } from "./MenuData/Products/Sectors.data"

export const MenuData: menuDataI = {
  [MenuItemsTextEnum.Products]: {
    [MenuItemTitlesEnum.communicationChannels]: communicationChannels,
    [MenuItemTitlesEnum.modules]: Modules,
    [MenuItemTitlesEnum.decisions]: decisions,
    [MenuItemTitlesEnum.sectors]: sectors,
  },
  [MenuItemsTextEnum.Services]: initial,
  [MenuItemsTextEnum.Prices]: initial,
  [MenuItemsTextEnum.AboutUs]: initial,
  [MenuItemsTextEnum.Contact]: initial,
}
