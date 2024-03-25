import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Root from "./Root"
import ErrorPage from "../Pages/Error/Error"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
])

export default router
