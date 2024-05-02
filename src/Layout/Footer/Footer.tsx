import SectionWrapper from "../../Components/SectionWrapper/SectionWrapper"
import Logo from "../../Components/Shared/Logo"
import { copyRight, gmail, phone } from "../../Components/Shared/icons"
import Socials from "../../Components/Socials/Socials"
import { FooterBottom, FooterStyles, FooterTop } from "./Footer.styled"

const Footer = () => {
  return (
    <SectionWrapper>
      <FooterStyles>
        <FooterTop>
          <div>
            <Logo />
            <p>ყველაფერი იწყება კონტაქტით</p>
            <ul>
              <li>პროდუქტი</li>
              <li>ფასები</li>
              <li>ინტეგრაციები</li>
              <li>მომხმარებლები</li>
              <li>რესურსები</li>
            </ul>
          </div>
          <div className="footerTopRight">
            <h4>Get The App</h4>

            <ul>
              <li>
                <img src={gmail} alt="Mail Icon" />
                <h5>info@whizio.ge</h5>
              </li>
              <li>
                <img src={phone} alt="Phone Icon" />
                <h5>0 322 500 503</h5>
              </li>
            </ul>
          </div>
        </FooterTop>
        <FooterBottom>
          <span>
            <img src={copyRight} alt="copyRight" />
            <p>2077 თი.დი.ჯი. WHIZ.IO. All rights reserved.</p>
          </span>
          <Socials />
        </FooterBottom>
      </FooterStyles>
    </SectionWrapper>
  )
}

export default Footer
