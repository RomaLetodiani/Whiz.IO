import SectionWrapper from "../../../../../Components/SectionWrapper/SectionWrapper"
import Card from "./Card/Card"
import { ConfigurationCards, ConfigurationStyles } from "./Configuration.styled"
import { CardObjects } from "./utils/CardObjects"

const Configuration = () => {
  return (
    <SectionWrapper>
      <ConfigurationStyles>
        <h2>ჩათის კონფიგურაცია</h2>
        <ConfigurationCards>
          {CardObjects.map((card, index) => {
            return <Card key={index} {...card} />
          })}
        </ConfigurationCards>
      </ConfigurationStyles>
    </SectionWrapper>
  )
}

export default Configuration
