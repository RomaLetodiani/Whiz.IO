import styled from "styled-components"

export const CommunicationManagementStyles = styled.div`
  margin-block: 50px;
  background: linear-gradient(
    204deg,
    rgba(239, 231, 246, 0.5) 15.3%,
    rgba(209, 213, 247, 0.5) 88.04%
  );

  h2 {
    text-align: center;
  }
  p {
    margin-block: 20px;
    max-width: 1000px;
    margin-inline: auto;
  }

  .CommunicationManagementImagesDiv {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-block: 20px;

    > div {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`
