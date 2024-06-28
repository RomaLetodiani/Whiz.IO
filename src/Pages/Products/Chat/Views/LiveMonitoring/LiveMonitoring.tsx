import {
  liveMonitoring,
  liveMonitoringVector,
} from "../../../../../Assets/Images/Chat"
import SectionWrapper from "../../../../../Components/SectionWrapper/SectionWrapper"
import {
  LiveMonitoringStyles,
  LiveMonitoringWrapper,
} from "./LiveMonitoring.styled"

const LiveMonitoring = () => {
  return (
    <LiveMonitoringWrapper>
      <SectionWrapper>
        <LiveMonitoringStyles>
          <div className="liveMonitoringHeader">
            <h2>ლაივ მონიტორინგი</h2>
            <p>
              ოპერატორების მომხმარებლებთან მიმოწერის პროცესის, სტატუსების,
              მდგომარეობების, სიტუაციური ანალიზის და შესაბამისი გადაწყვეტილების
              მიღების საშუალებას იძლევა ლაივ-პანელი.
            </p>
          </div>
          <div className="liveMonitoringImages">
            <div>
              <img src={liveMonitoring} alt="Live Monitoring" />
            </div>
            <img
              className="liveMonitoringVector"
              src={liveMonitoringVector}
              alt="Live Monitoring Vector"
            />
          </div>
        </LiveMonitoringStyles>
        <h5>
          ლაივ-პანელი გარდა იმისა, რომ რეალურ დროში გაძლევბთ პროცესის
          მართვისთვის საჭირო ინფორმაციას, აქედანვე შეგიძლიათ მართოთ რომელმა
          ოპერატორმა რომელი საიტიდან მიიღოს მომართვა და ა.შ.
        </h5>
      </SectionWrapper>
    </LiveMonitoringWrapper>
  )
}

export default LiveMonitoring
