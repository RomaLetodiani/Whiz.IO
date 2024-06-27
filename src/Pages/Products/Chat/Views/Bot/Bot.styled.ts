import styled from "styled-components"

export const BotStyles = styled.div`
  h2 {
    text-align: center;
  }

  p {
    margin-inline: auto;
    max-width: 988px;
    margin-block: 50px;

    @media (max-width: 768px) {
      margin-block: 20px;
    }
  }

  .chatBotImageDiv {
    display: flex;
    justify-content: center;
    margin-block: 50px;

    img {
      width: 100%;
      max-width: 988px;
    }
  }
`
