import Advantages from "./Views/Advantages/Advantages"
import BottomBanner from "./Views/BottomBanner/BottomBanner"
import CommunicationChannels from "./Views/CommunicationChannels/CommunicationChannels"
import Hero from "./Views/Hero/Hero"
import PurpleBanner from "./Views/PurpleBanner/PurpleBanner"

const Home = () => {
  return (
    <>
      <Hero />
      <CommunicationChannels />
      <PurpleBanner />
      <Advantages />
      <BottomBanner />
    </>
  )
}

export default Home
