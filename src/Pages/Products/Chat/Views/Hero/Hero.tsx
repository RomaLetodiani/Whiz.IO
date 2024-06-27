import { branding } from "../../../../../Assets/Images/Chat"
import Blob from "../../../../../Components/Blob/Blob"
import SectionWrapper from "../../../../../Components/SectionWrapper/SectionWrapper"
import { HeroStyles } from "./Hero.styled"

const Hero = () => {
  return (
    <SectionWrapper>
      <HeroStyles>
        <div>
          <h1>
            WHIZ.IO CHAT
            <br />
            მარტივი, სწრაფი, ეფექტური
          </h1>
          <p>
            ჩვენს ჩათს აქვს ყველა ის ფუნქციონალი, რომელიც გაძლევთ საშუალებას
            მარტივად მოირგოთ თქვენს საჭიროებებზე, ისარგებლოთ cloud ან
            on-premises ვერსიებით
          </p>
        </div>
        <div>
          <h2>ბრენდინგი</h2>
          <div>
            <div className="brandingImageDiv">
              <img src={branding} alt="Branding" />
            </div>
            <div className="brandingTexts">
              <p>
                მარტივად შეგიძლიათ ჩათ ვიდჯჟეთს მისცეთ თქვენი ბრენდის შესაბამისი
                ვიზუალი, ატვირთოთ ლოგო, შეცვალოთ ფერი...
              </p>
              <Blob fillColor="#F0EEF9" />
            </div>
          </div>
        </div>
      </HeroStyles>
    </SectionWrapper>
  )
}

export default Hero
