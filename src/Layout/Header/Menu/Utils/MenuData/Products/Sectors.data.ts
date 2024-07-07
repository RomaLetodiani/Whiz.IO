import {
  APIintegration,
  associations,
  autoImport,
  autoInformator,
  banks,
  education,
  energy,
  insurance,
  retail,
  rightsGuard,
  userSupport,
} from "../../../../../../Components/Shared/MenuIcons"
import { menuDataItemI } from "../../Menu.types"

export const sectors: menuDataItemI[] = [
  {
    icon: energy,
    title: "ელექტრო  ენერგია  ბუნებრივი აირი  წყალმომარაგება",
    desc: "მომართვების ქეისებად ფორმირება, მართვა",
  },
  {
    icon: banks,
    title: "ბანკები  მიკრო საფინანსო  ორგანიზაციები",
    desc: "ტელემარკეტინგი, გამავალი კამპანიები",
  },
  {
    icon: retail,
    title: "რითეილ",
    desc: "უბრალო ინტერესიდან ერთგულებამდე",
  },
  {
    icon: insurance,
    title: "დაზღვევა",
    desc: "კომუნიკაციის შეფასება, რეიტინგები",
  },
  {
    icon: autoImport,
    title: "ავტოიმპორტი",
    desc: "ცოდნის ბაზა, შიდა ჩათი, სიახლეები, აქციები",
  },
  {
    icon: associations,
    title: "ასოციაციები",
    desc: "აქტივობები, სამუშაო გრაფიკები, დასწრება",
  },

  {
    icon: insurance,
    title: "ჯანდაცვა",
    desc: "მომართვების შინაარ სობრივი თეგირება",
  },
  {
    icon: education,
    title: "განათლება",
    desc: "კორპორატიული ინფორმაცია, ფაილები",
  },
  {
    icon: userSupport,
    title: "მომხმარებელთა მხარდაჭერა",
    desc: "იუზერების აქტოვობების, ქმედებების ჟურნალი",
  },
  {
    icon: rightsGuard,
    title: "უფლებების დაცვა",
    desc: "ოპერატორის და მომხმარებლის ავტომატური დაკავშირება",
  },
  {
    icon: autoInformator,
    title: "ავტოინფორმატორი",
    desc: "ხმოვანი ფაილების დაგზავნა, შეტყობინება დავალიენებაზე და სხვა",
  },
  {
    icon: APIintegration,
    title: "API ინტეგრაცია",
    desc: "ინტეგრაცია სოფთებთან, მონაცემთა ბაზებთან",
  },
]
