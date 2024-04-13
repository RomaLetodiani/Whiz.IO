import SectionWrapper from "../../../../Components/SectionWrapper/SectionWrapper"
import { BottomBannerStyles } from "./BottomBanner.styled"
import bottomBanner from "../../../../Assets/Images/Home/BottomBanner.svg"

const BottomBanner = () => {
  return (
    <BottomBannerStyles>
      <span className="blurBg"></span>
      <SectionWrapper>
        <div className="textDiv">
          <h2>
            იკონტაქტე <span>მარტივად</span>, გაზარდე ლოიალურობა, გაყიდე უკეთ
          </h2>
          <ul>
            <li>
              შექმენით ჩატის გამოცდილება, რომელსაც თქვენი მომხმარებლები
              <span> იცნობენ და უყვართ</span>
            </li>
            <li>
              შექმენით ჩატის გამოცდილება, რომელსაც თქვენი მომხმარებლები
              <span> იცნობენ და უყვართ</span>
            </li>
          </ul>
        </div>
        <div className="imgDiv">
          <img src={bottomBanner} alt="WHIZ.IO" />
        </div>
      </SectionWrapper>
    </BottomBannerStyles>
  )
}

export default BottomBanner
