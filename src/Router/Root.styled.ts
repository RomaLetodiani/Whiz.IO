import styled from "styled-components"

export const RootDiv = styled.div`
  min-height: 100vh;
  min-width: 375px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const OutletWrapper = styled.div`
  margin-top: 100px;
  flex: 1;
  @media (max-width: 768px) {
    margin-top: 100px;
  }
`
