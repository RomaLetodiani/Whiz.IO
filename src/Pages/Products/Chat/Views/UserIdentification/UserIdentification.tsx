import { userIdentification } from "../../../../../Assets/Images/Chat"
import SectionWrapper from "../../../../../Components/SectionWrapper/SectionWrapper"
import { UserIdentificationStyles } from "./UserIdentification.styled"

const UserIdentification = () => {
  return (
    <SectionWrapper paddingOn={false}>
      <UserIdentificationStyles>
        <h2>მომხმარებლის იდენთიფიკაცია</h2>
        <div>
          <div className="userIdentificationImageDiv">
            <img src={userIdentification} alt="User Identification" />
          </div>
          <div className="userIdentificationTextDiv">
            <p>
              სურვილის შემთხვევაში, კომუნიკაციის დაწყებამდე, შეგიძლიათ
              მომხმარებელს დაატოვებინოთ თქვენთვის სასურველი საკონტაქტო
              ინფორმაცია.
            </p>
          </div>
        </div>
      </UserIdentificationStyles>
    </SectionWrapper>
  )
}

export default UserIdentification
