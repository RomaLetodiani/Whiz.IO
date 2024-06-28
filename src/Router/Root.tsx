import { Outlet } from "react-router-dom"
import Footer from "../Layout/Footer/Footer"
import Header from "../Layout/Header/Header"
import { OutletWrapper, RootDiv } from "./Root.styled"
import { Suspense } from "react"
import Loading from "../Pages/Loading/Loading"

const Root = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RootDiv>
        <Header />
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
        <Footer />
      </RootDiv>
    </Suspense>
  )
}

export default Root
