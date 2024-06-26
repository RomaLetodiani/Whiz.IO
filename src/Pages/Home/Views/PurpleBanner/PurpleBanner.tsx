import SectionWrapper from "../../../../Components/SectionWrapper/SectionWrapper"
import { PurpleBannerStyles } from "./PurpleBanner.styled"
import { check } from "../../../../Components/Shared/icons"
import { purpleBanner } from "../../../../Assets/Images/Home"

const PurpleBanner = () => {
  return (
    <PurpleBannerStyles>
      <SectionWrapper>
        <div className="TextsDiv">
          <h2>
            პირველი <span>კომუნიკაცია</span> - პირველი შთაბეჭდილება
          </h2>
          <ul>
            <li>
              <img src={check} alt="check" />

              <p>
                აჩვენეთ თქვენი საქონელი ელეგანტურ პროდუქტის ბარათებში და
                <span> გაყიდეთ მეტი</span> საუბრის დროს
              </p>
            </li>
            <li>
              <img src={check} alt="check" />

              <p>
                <span>დააკვალიფიცირეთ ლიდები</span> ონლაინ, მორგებული ფორმებით
                და AI ჩატბოტის ავტომატიზაციებით
              </p>
            </li>
          </ul>
        </div>
        <div className="imgDiv">
          <img src={purpleBanner} alt="Excited Man With Laptop" />
        </div>
      </SectionWrapper>
    </PurpleBannerStyles>
  )
}

export default PurpleBanner
