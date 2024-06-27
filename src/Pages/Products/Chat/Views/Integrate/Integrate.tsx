import { integration } from "../../../../../Assets/Images/Chat"
import SectionWrapper from "../../../../../Components/SectionWrapper/SectionWrapper"
import { IntegrateStyles } from "./Integrate.styled"

const Integrate = () => {
  return (
    <SectionWrapper>
      <IntegrateStyles>
        <h2>ჩათის განთავსება საიტზე</h2>
        <div>
          <div className="integrateTextDiv">
            <p>
              ასევე, მარტივად განთავსდება ჩათის აიქონი თქვენს ვებ-გვერდზე, ჩვენს
              მიერ მოცემული სკრიპტის ჩაკოპირებით.
            </p>
          </div>
          <div className="integrateImageDiv">
            <img src={integration} alt="ChatIntegration" />
          </div>
        </div>
      </IntegrateStyles>
    </SectionWrapper>
  )
}

export default Integrate
