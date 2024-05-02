import { facebook, linkedIn, twitter } from "../Shared/icons"
import { SocialsStyles } from "./Socials.styled"

const socials = [
  {
    name: "Facebook",
    icon: facebook,
  },
  {
    name: "Twitter",
    icon: twitter,
  },
  {
    name: "LinkedIn",
    icon: linkedIn,
  },
]

const Socials = () => {
  return (
    <SocialsStyles>
      {socials.map((social, index) => (
        <span key={index}>
          <img src={social.icon} alt={social.name} />
        </span>
      ))}
    </SocialsStyles>
  )
}

export default Socials
