import { ChatPageStyles } from "./ChatPage.styles"
import APIintegration from "./Views/APIintegration/APIintegration"
import AdditionalDevelopment from "./Views/AdditionalDevelopment/AdditionalDevelopment"
import AppealsDetails from "./Views/AppealsDetails/AppealsDetails"
import Bot from "./Views/Bot/Bot"
import CommunicationManagement from "./Views/CommunicationManagement/CommunicationManagement"
import Configuration from "./Views/Configuration/Configuration"
import Hero from "./Views/Hero/Hero"
import Integrate from "./Views/Integrate/Integrate"
import LiveMonitoring from "./Views/LiveMonitoring/LiveMonitoring"
import UserIdentification from "./Views/UserIdentification/UserIdentification"

const ChatPage = () => {
  return (
    <ChatPageStyles>
      <Hero />
      <Integrate />
      <Configuration />
      <Bot />
      <UserIdentification />
      <CommunicationManagement />
      <AppealsDetails />
      <LiveMonitoring />
      <APIintegration />
      <AdditionalDevelopment />
    </ChatPageStyles>
  )
}

export default ChatPage
