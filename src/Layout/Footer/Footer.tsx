import Logo from "../../Components/Shared/Logo"
import { copyRight, phone } from "../../Components/Shared/icons"
import Socials from "../../Components/Socials/Socials"
import { FooterBottom, FooterStyles, FooterTop } from "./Footer.styled"

const Footer = () => {
  return (
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
            {/* <li>
                <img src={gmail} alt="Mail Icon" />
                <h5>info@</h5>
              </li> */}
            <a href="tel:+995322551441">
              <li>
                <img src={phone} alt="Phone Icon" />
                <h5>+995 322 551 441</h5>
              </li>
            </a>
          </ul>
        </div>
      </FooterTop>
      <FooterBottom>
        <span>
          <img src={copyRight} alt="copyRight" />
          <p>All rights reserved Whiz.io Soft LLC (406318140).</p>
        </span>
        <Socials />
      </FooterBottom>
    </FooterStyles>
  )
}

export default Footer
