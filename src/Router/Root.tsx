import { Outlet } from "react-router-dom"
import Footer from "../Layout/Footer/Footer"
import Header from "../Layout/Header/Header"
import { OutletWrapper, RootDiv } from "./Root.styled"

const Root = () => {
  return (
    <RootDiv>
      <Header />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <Footer />
    </RootDiv>
  )
}

export default Root
