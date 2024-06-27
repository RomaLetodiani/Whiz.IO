import { Outlet } from "react-router-dom"
import Footer from "../Layout/Footer/Footer"
import Header from "../Layout/Header/Header"
import { OutletWrapper, RootDiv } from "./Root.styled"
import { Suspense } from "react"
import Loading from "../Pages/Loading/Loading"

const Root = () => {
  return (
    <RootDiv>
      <Header />
      <OutletWrapper>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </OutletWrapper>
      <Footer />
    </RootDiv>
  )
}

export default Root
