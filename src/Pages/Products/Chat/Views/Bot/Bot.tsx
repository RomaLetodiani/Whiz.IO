import { bot } from "../../../../../Assets/Images/Chat"
import SectionWrapper from "../../../../../Components/SectionWrapper/SectionWrapper"
import { BotStyles } from "./Bot.styled"

const Bot = () => {
  return (
    <SectionWrapper>
      <BotStyles>
        <h2>ჩათ ბოტი</h2>
        <p>
          როგორც წესი, ინფორმაციული ტიპის მომართვების 80% შესაძლებელია
          დამუშავდეს ჩათ ბოტის მეშვეობით, რომლიც შეიძლება ჩაიშალოს სასურველ
          სიღრმეზე, თქვენი მომსახურების თუ პროდუქტის თავისებურებების
          შესაბამისად.
        </p>
        <div className="chatBotImageDiv">
          <img src={bot} alt="Chat Bot Image" />
        </div>
      </BotStyles>
    </SectionWrapper>
  )
}

export default Bot
