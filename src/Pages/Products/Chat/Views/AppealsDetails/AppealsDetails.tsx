import { mainAppealsDetails } from "../../../../../Assets/Images/Chat"
import SectionWrapper from "../../../../../Components/SectionWrapper/SectionWrapper"
import { AppealsDetailsStyles } from "./AppealsDetails.styled"
import { AppealsDetailsImages } from "./Utils/AppealsDetailsImages"

const AppealsDetails = () => {
  return (
    <SectionWrapper>
      <AppealsDetailsStyles>
        <div className="AppealsDetailsHeader">
          <h2>მომართვის დეტალები</h2>
          <p>
            მომართვასთან დაკავშირებული ნებისმიერი ტიპის ტექნიკური ინფორმაცია თუ
            KPI მაჩვენებელი მარტივად ხელმისაწვდომია თქვენთვის
          </p>
        </div>
        <div className="AppealsDetailsImages">
          {AppealsDetailsImages.map((item, index) => (
            <div key={index}>
              <img src={item.img} alt={item.alt} />
            </div>
          ))}
        </div>
        <div className="AppealsDetailsImageDiv">
          <img src={mainAppealsDetails} alt="Appeals Details" />
        </div>
      </AppealsDetailsStyles>
    </SectionWrapper>
  )
}

export default AppealsDetails
