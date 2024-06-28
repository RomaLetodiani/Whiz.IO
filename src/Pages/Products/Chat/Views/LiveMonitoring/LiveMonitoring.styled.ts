import styled from "styled-components"

export const LiveMonitoringWrapper = styled.div`
  background-color: #fff;

  h5 {
    padding: 100px 0 50px 0;
    max-width: 900px;
    margin-inline: auto;
    font-family: "mkhedruliRegular";
    font-size: 12px;
    font-weight: 400;
  }
`

export const LiveMonitoringStyles = styled.div`
  background-color: #f9f8ff;
  padding-top: 50px;
  border-radius: 20px;
  position: relative;

  @media (max-width: 768px) {
    padding-inline: 20px;
    padding-top: 20px;
  }

  .liveMonitoringHeader {
    h2 {
      text-align: center;
    }

    p {
      padding-top: 20px;
      max-width: 1200px;
      margin-inline: auto;
      line-height: 34px;
      font-size: 14px;
    }
  }

  .liveMonitoringImages {
    position: relative;
    > div {
      position: relative;
      max-width: 900px;
      margin-inline: auto;
      z-index: 2;
      bottom: -100px;

      @media (max-width: 768px) {
        bottom: -50px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .liveMonitoringVector {
      position: absolute;
      bottom: 100px;
      width: 100%;
    }
  }
`
