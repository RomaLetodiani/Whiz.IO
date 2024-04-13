import styled, { keyframes } from "styled-components"

const CommunicationChannelsStyles = styled.div`
  > h2 {
    font-family: "mtavruliBlack";
    text-align: center;
    margin-bottom: 20px;
    font-size: clamp(24px, 2vw, 32px);
    font-weight: 900;
    line-height: 48px;
    color: #261d44;

    @media (max-width: 768px) {
      text-align: left;
      line-height: 36px;
      padding-inline: 5vw;
    }

    span {
      color: #8c64f0;
    }
  }

  > div {
    position: relative;

    min-height: 700px;

    @media (max-width: 768px) {
      min-height: 800px;
    }

    @media (max-width: 600px) {
      min-height: 650px;
    }

    @media (max-width: 500px) {
      min-height: 550px;
    }

    .PinkEllipse {
      position: absolute;
      left: 50%;
      bottom: 0;
      width: clamp(100px, 20vw, 250px);
      height: clamp(200px, 30vw, 600px);
      transform: rotate(33deg);
      flex-shrink: 0;
      border-radius: 600px;
      background: #8c64f0;
      opacity: 0.5;
      filter: blur(150px);

      @media (max-width: 768px) {
        left: 20%;
        bottom: 40%;
        filter: blur(60px);
      }
    }
    .BlueEllipse {
      position: absolute;
      right: 0;
      bottom: 0;
      width: clamp(100px, 20vw, 250px);
      height: clamp(200px, 30vw, 600px);
      flex-shrink: 0;
      border-radius: 585px;
      background: #1e65ff;
      opacity: 0.5;
      filter: blur(150px);
      @media (max-width: 768px) {
        bottom: 40%;
        filter: blur(60px);
      }
    }

    .DialogDiv {
      position: absolute;
      display: flex;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
      width: clamp(300px, 50vw, 700px);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: -19px 20px 55px 5px rgba(89, 91, 112, 0.1);

      @media (max-width: 768px) {
        top: clamp(320px, 70vw, 500px);
        width: 95vw;
      }

      span {
        position: absolute;
        right: 0;
        width: 70%;
        height: 100%;
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) -6.11%,
          rgba(255, 255, 255, 0.22) 45.35%,
          #fff 100%
        );
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`

const ChannelsCycleStyles = styled.div`
  width: clamp(300px, 55vw, 550px);
  height: clamp(300px, 55vw, 550px);
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(-30%, -50%);

  @media (max-width: 768px) {
    left: 50%;
    top: 0;
    transform: translate(-50%, 0);
  }
`

const Orbit = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px dotted #c5b1f7;
  border-radius: 50%;

  > div {
    position: absolute;
  }
`

// Define keyframes for the animations
const rotateAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  50% {
    transform:translate(-50%, -50%) rotate(30deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
`

const moveHalfwayAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  50% {
    transform:translate(-50%, -50%) rotate(20deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
`

const moveRightLeftAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(-25deg);
  }
  50% {
    transform: translate(-50%, -50%) rotate(-10deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-25deg);
  }
`

const Orbit1 = styled(Orbit)`
  width: clamp(150px, 25vw, 250px);
  height: clamp(150px, 25vw, 250px);
  animation: ${rotateAnimation} 8s linear infinite;
  div:nth-child(1) {
    left: 12%;
  }
  div:nth-child(2) {
    bottom: 0px;
    left: 12%;

    @media (max-width: 768px) {
      left: 90%;
      bottom: 50%;
    }
  }
`

const Orbit2 = styled(Orbit)`
  width: clamp(225px, 40vw, 400px);
  height: clamp(225px, 40vw, 400px);
  animation: ${moveHalfwayAnimation} 10s linear infinite backwards;
  div:nth-child(1) {
    top: 40%;
    left: -6%;
  }
  div:nth-child(2) {
    bottom: -5%;
    right: 50%;

    @media (max-width: 768px) {
      right: 0;
      bottom: 70%;
    }
  }
  div:nth-child(3) {
    right: 50%;
    top: -5%;
  }
`

const Orbit3 = styled(Orbit)`
  width: 100%;
  height: 100%;

  animation: ${moveHalfwayAnimation} 12s linear infinite alternate;

  @media (min-width: 768px) {
    animation: ${moveRightLeftAnimation} 12s linear infinite alternate;
  }
  div:nth-child(1) {
    top: 10%;
    left: 10%;

    @media (max-width: 768px) {
      left: -5%;
      top: 50%;
    }
  }
  div:nth-child(2) {
    bottom: 10%;
    left: 10%;

    @media (max-width: 768px) {
      left: 70%;
      bottom: 90%;
    }
  }
  div:nth-child(3) {
    right: 25%;
    top: 0px;

    @media (max-width: 768px) {
      right: 68%;
      top: 0%;
    }
  }
`

export {
  CommunicationChannelsStyles,
  ChannelsCycleStyles,
  Orbit,
  Orbit1,
  Orbit2,
  Orbit3,
}
