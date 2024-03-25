import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import router from "./Router/Router"
import GlobalStyle from "./GlobalStyles"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyle />
    <RouterProvider router={router} />,
  </>,
)
