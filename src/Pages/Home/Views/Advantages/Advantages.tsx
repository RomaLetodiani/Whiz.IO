import { advantages } from "../../../../Assets/Images/Home"
import SectionWrapper from "../../../../Components/SectionWrapper/SectionWrapper"
import { AdvantagesStyles } from "./Advantages.styled"
const Advantages = () => {
  return (
    <SectionWrapper>
      <AdvantagesStyles>
        <h2>
          აჩუქე <span>მომხმარებელს</span> შესანიშნავი გამოცდილება
        </h2>
        <div>
          <div className="textDiv">
            <ul>
              <li>
                შექმენით ჩატის გამოცდილება, რომელსაც თქვენი მომხმარებლები
                <span> იცნობენ და უყვართ</span>
              </li>
              <li>
                მოაგვარეთ მომხმარებელთა პრობლემები <span>პროაქტიულად</span>
              </li>
              <li>
                იწინასწარმეტყველეთ კითხვები და უპასუხეთ
                <span> უფრო სწრაფად</span>
              </li>
            </ul>
          </div>
          <div className="imgDiv">
            <img src={advantages} alt="Advantages" />
          </div>
        </div>
      </AdvantagesStyles>
    </SectionWrapper>
  )
}

export default Advantages
