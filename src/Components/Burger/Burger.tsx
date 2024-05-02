import { BurgerStyles } from "./Burger.Styled"

type Props = {
  open: boolean
  onBurgerClick: () => void
}

const Burger = (props: Props) => {
  return (
    <BurgerStyles open={props.open} onClick={props.onBurgerClick}>
      <div></div>
      <div></div>
      <div></div>
    </BurgerStyles>
  )
}

export default Burger
