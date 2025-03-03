import { ErrorPageStyles } from "./Error.styles"

export default function ErrorPage() {
  return (
    <ErrorPageStyles>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{/* <i>{error.statusText || error.message}</i> */}</p>
    </ErrorPageStyles>
  )
}
