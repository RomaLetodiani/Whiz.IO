import { Outlet } from "react-router-dom"
import Footer from "../Layout/Footer/Footer"
import Header from "../Layout/Header/Header"
import { RootDiv } from "./Root.styled"

const Root = () => {
  return (
    <RootDiv>
      <Header />
      <Outlet />
      <Footer />
    </RootDiv>
  )
}

export default Root
