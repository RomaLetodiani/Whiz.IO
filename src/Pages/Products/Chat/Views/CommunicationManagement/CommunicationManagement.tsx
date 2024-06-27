import {
  communicationManagement1,
  communicationManagement2,
  communicationManagement3,
} from "../../../../../Assets/Images/Chat"
import SectionWrapper from "../../../../../Components/SectionWrapper/SectionWrapper"
import { CommunicationManagementStyles } from "./CommunicationManagement.styled"

const CommunicationManagementImages = [
  communicationManagement1,
  communicationManagement2,
  communicationManagement3,
]

const CommunicationManagement = () => {
  return (
    <CommunicationManagementStyles>
      <SectionWrapper>
        <div>
          <h2>კომუნიკაციის მართვა</h2>
          <p>
            შესაბამისი უფლებების მქონე იუზერს შეუძლია ნახოს მიმოწერის ისტორია,
            შეინახოს, ჩამოტვირთოს. შესაძლებელია დაწესდეს მომხამრებლის ან
            ოპერატორის უმოქმედობის შემთხვევების მართვა.
          </p>
        </div>
        <div className="CommunicationManagementImagesDiv">
          {CommunicationManagementImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Communication Management ${index}`} />
            </div>
          ))}
        </div>
      </SectionWrapper>
    </CommunicationManagementStyles>
  )
}

export default CommunicationManagement
