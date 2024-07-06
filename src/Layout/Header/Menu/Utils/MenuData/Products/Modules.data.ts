import { menuDataItemI } from "../../Menu.types"

import {
  API,
  autoDialer,
  autoInformer,
  campaign,
  cases,
  CRM,
  internalCollaboration,
  knowledgeBase,
  livePanel,
  logs,
  monitoring,
  requests,
  tasks,
  ticketing,
  WFM,
} from "../../../../../../Components/Shared/MenuIcons"

export const Modules: menuDataItemI[] = [
  {
    icon: livePanel,
    title: "ლაივპანელი",
    desc: "პროცესების კონტროლი ლაივში რეჟიმში",
  },
  {
    icon: requests,
    title: "მომართვები",
    desc: "შემომავალი და გამავალი კომუნიკაციის აღრიცხვა",
  },
  {
    icon: tasks,
    title: "დავალებები",
    desc: "თასქ მენეჯმენტი, პროცესების მართვა",
  },
  {
    icon: cases,
    title: "ქეისები",
    desc: "მომართვების ქეისებად ფორმირება, მართვა",
  },
  {
    icon: campaign,
    title: "კამპანიები",
    desc: "ტელემარკეტინგი, გამავალი კამპანიები",
  },
  {
    icon: CRM,
    title: "CRM",
    desc: "უბრალო ინტერესიდან ერთგულებამდე",
  },

  {
    icon: monitoring,
    title: "მონიტორინგი",
    desc: "კომუნიკაციის შეფასება, რეიტინგები",
  },
  {
    icon: internalCollaboration,
    title: "შიდა კოლაბორაცია",
    desc: "ცოდნის ბაზა, შიდა ჩათი, სიახლეები, აქციები",
  },
  {
    icon: WFM,
    title: "WFM",
    desc: "აქტივობები, სამუშაო გრაფიკები, დასწრება,",
  },
  {
    icon: ticketing,
    title: "თიქეთინგი",
    desc: "მომართვების შინაარ სობრივი თეგირება",
  },
  {
    icon: knowledgeBase,
    title: "ცოდნის ბაზა",
    desc: "კორპორატიული ინფორმაცია, ფაილები",
  },
  {
    icon: logs,
    title: "ლოგირება",
    desc: "იუზერების აქტოვობების, ქმედებების ჟურნალი",
  },

  {
    icon: autoDialer,
    title: "ავტოდაილერი",
    desc: "მომართვების შინაარ სობრივი თეგირება",
  },
  {
    icon: autoInformer,
    title: "ავტოინფორმატორი",
    desc: "ხმოვანი ფაილების დაგზავნა, შეტყობინება დავალიენებაზე და სხვა",
  },
  {
    icon: API,
    title: "API ინტეგრაცია",
    desc: "ინტეგრაცია სოფთებთან, მონაცემთა ბაზებთან",
  },
]
