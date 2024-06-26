import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Root from "./Root"
import ErrorPage from "../Pages/Error/Error"
import { lazy } from "react"

const ChatPage = lazy(() => import("../Pages/Products/Chat/ChatPage"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        children: [
          {
            path: "chat",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
])

export default router
