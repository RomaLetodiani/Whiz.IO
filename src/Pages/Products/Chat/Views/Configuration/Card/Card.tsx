import { CardStyles } from "./Card.styles"

type CardProps = {
  title: string
  img: string
  text: string
}

const Card = ({ title, img, text }: CardProps) => {
  return (
    <CardStyles>
      <div className="CardHeader">
        <h3>{title}</h3>
      </div>
      <div className="CardImageDiv">
        <img src={img} alt={title} />
      </div>
      <div className="CardFooter">
        <p>{text}</p>
      </div>
    </CardStyles>
  )
}

export default Card
