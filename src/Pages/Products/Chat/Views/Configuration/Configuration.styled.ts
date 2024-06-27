import styled from "styled-components"

export const ConfigurationStyles = styled.div`
  h2 {
    text-align: center;
    margin-block: 30px;
  }
`

export const ConfigurationCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 40px;
  justify-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }
`
