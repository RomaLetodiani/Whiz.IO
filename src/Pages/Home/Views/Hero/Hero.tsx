import UalaHero from "../../../../Assets/Images/Home/UalaHero.svg"
import SectionWrapper from "../../../../Components/SectionWrapper/SectionWrapper"

import Button from "../../../../Components/UI/Button/Button"
import { HeroStyles } from "./Hero.styled"

import { check } from "../../../../Components/Shared/icons"

const Hero = () => {
  return (
    <SectionWrapper>
      <HeroStyles>
        <div className="HeroTextsDiv">
          <h1>
            ყველაფერი <span>კონტაქტით</span> იწყება
          </h1>
          <p>
            დაუთმე მეტი ყურადღება მომხმარებლებს, ეკონტაქტე WHIZ.IO-ს
            მომსახურების სრულყოფილი პლათფორმით, აღაფრთოვანე და გააძლიერე მათი
            თქვენდამი ლოიალურობა. „ხალხს ყოველთვის ახსოვს როგორ აგრძნობინეთ
            თავი“
          </p>
          <Button>მოითხოვე დემო</Button>
          <ul className="featuresTexts">
            <li>
              <img src={check} alt="check" />
              <span>უფასოდ 14 დღე</span>
            </li>
            <li>
              <img src={check} alt="check" />
              <span>პერსონალური კონფიგურაცია</span>
            </li>
          </ul>
        </div>
        <div className="HeroImageDiv">
          <img src={UalaHero} alt="" />
        </div>
      </HeroStyles>
    </SectionWrapper>
  )
}

export default Hero
