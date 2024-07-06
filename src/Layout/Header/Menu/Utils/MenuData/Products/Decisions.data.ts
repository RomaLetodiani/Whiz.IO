import {
  callCenter,
  contactCenter,
  sales,
} from "../../../../../../Components/Shared/MenuIcons"
import { menuDataItemI } from "../../Menu.types"

export const decisions: menuDataItemI[] = [
  {
    icon: callCenter,
    title: "ქოლ ცენტრი",
    desc: "პროცესების კონტროლი ლაივში რეჟიმში",
  },
  {
    icon: sales,
    title: "გაყიდვები და ტელემარკეტინგი",
    desc: "თასქ მენეჯმენტი, პროცესების მართვა",
  },
  {
    icon: contactCenter,
    title: "კონტაქტ ცენტრი",
    desc: "შემომავალი და გამავალი კომუნიკაციის აღრიცხვა",
  },
]
