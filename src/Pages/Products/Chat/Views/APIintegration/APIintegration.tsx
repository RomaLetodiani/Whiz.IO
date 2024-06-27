import { apiIntegration } from "../../../../../Assets/Images/Chat"
import SectionWrapper from "../../../../../Components/SectionWrapper/SectionWrapper"
import { APIintegrationStyles } from "./APIintegration.styled"

const APIintegration = () => {
  return (
    <SectionWrapper>
      <APIintegrationStyles>
        <h2>API ინტეგრაცია</h2>
        <div>
          <div>
            <p>
              საშუალება გაქვთ ჩვენი ჩათი დავაკავშიროთ თქვენს CRM, ERP, Billing
              თუ სხვა სისტემებს და მიმოწერისას, შესაბამისი იდენთიფიკაციის
              პირობებში, ავტომატურად მივაწოდოთ მომხმარებლისთვის სასურველი
              ინფორმაცია თქვენი პროგრამული უზრუნველყოფებიდან.
            </p>
          </div>
          <div>
            <img src={apiIntegration} alt="API Integration" />
          </div>
        </div>
      </APIintegrationStyles>
    </SectionWrapper>
  )
}

export default APIintegration
