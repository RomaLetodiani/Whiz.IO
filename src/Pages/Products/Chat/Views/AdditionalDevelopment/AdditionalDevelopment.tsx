import { additionalDevelopment } from "../../../../../Assets/Images/Chat"
import SectionWrapper from "../../../../../Components/SectionWrapper/SectionWrapper"
import { AdditionalDevelopmentStyles } from "./AdditionalDevelopment.styled"

const AdditionalDevelopment = () => {
  return (
    <SectionWrapper>
      <AdditionalDevelopmentStyles>
        <h2>დამატებითი დეველოპმენტი</h2>
        <div>
          <div>
            <img
              src={additionalDevelopment}
              alt="Additional Development Image"
            />
          </div>
          <div>
            <p>
              თუ აღმოაჩენთ, რომ ჩვენს ჩათს არ აქვს თქვენი პერსონალური საჭიროების
              რაიმე მოდული, დაგვიკვეთეთ და მიიღებთ ოპტიმალურ ვადებში.
            </p>
          </div>
        </div>
      </AdditionalDevelopmentStyles>
    </SectionWrapper>
  )
}

export default AdditionalDevelopment
