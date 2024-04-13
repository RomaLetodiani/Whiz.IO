import IconWrapper from "../../../../Components/IconWrapper/IconWrapper"
import {
  Chat,
  Email,
  Instagram,
  Logo,
  Messenger,
  Telegram,
  Telephone,
  Viber,
  WhatsUp,
} from "../../../../Components/Shared/icons"
import {
  ChannelsCycleStyles,
  Orbit1,
  Orbit2,
  Orbit3,
} from "./CommunicationChannels.styled"

const ChannelsCycle = () => {
  return (
    <ChannelsCycleStyles>
      <IconWrapper
        $additionalStyles="
        width: clamp(50px, 5vw, 80px);
        height: clamp(50px, 5vw, 80px);
        border-radius:80px;
        padding: clamp(12px, 1vw, 20px);
        position: absolute;
        left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      "
      >
        <img src={Logo} alt="Logo" />
      </IconWrapper>
      <Orbit1>
        <IconWrapper>
          <img src={Messenger} alt="Messenger" />
        </IconWrapper>
        <IconWrapper>
          <img src={Chat} alt="Chat" />
        </IconWrapper>
      </Orbit1>
      <Orbit2>
        <IconWrapper>
          <img src={Instagram} alt="Instagram" />
        </IconWrapper>
        <IconWrapper>
          <img src={WhatsUp} alt="WhatsUp" />
        </IconWrapper>
        <IconWrapper>
          <img src={Telegram} alt="Telegram" />
        </IconWrapper>
      </Orbit2>
      <Orbit3>
        <IconWrapper>
          <img src={Telephone} alt="Telephone" />
        </IconWrapper>
        <IconWrapper>
          <img src={Email} alt="Email" />
        </IconWrapper>
        <IconWrapper>
          <img src={Viber} alt="Viber" />
        </IconWrapper>
      </Orbit3>
    </ChannelsCycleStyles>
  )
}

export default ChannelsCycle
