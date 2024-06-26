import { CommunicationChannelsStyles } from "./CommunicationChannels.styled"
import ChannelsCycle from "./ChannelsCycle"
import SectionWrapper from "../../../../Components/SectionWrapper/SectionWrapper"
import { dialog } from "../../../../Assets/Images/Home"
const CommunicationChannels = () => {
  return (
    <SectionWrapper>
      <CommunicationChannelsStyles>
        <h2>
          იყავი <span>ყველგან</span> სადაც შენი მომხმარებელია
        </h2>
        <div>
          <span className="PinkEllipse"></span>
          <span className="BlueEllipse"></span>
          <ChannelsCycle />
          <div className="DialogDiv">
            <span></span>
            <img src={dialog} alt="Dialog" />
          </div>
        </div>
      </CommunicationChannelsStyles>
    </SectionWrapper>
  )
}

export default CommunicationChannels
