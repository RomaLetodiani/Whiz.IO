import { HTMLAttributes, ReactNode } from "react"
import IconWrapperStyles from "./IconWrapper.styled"

interface IconWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  $additionalStyles?: string
}

const IconWrapper = ({ children, ...rest }: IconWrapperProps) => {
  return <IconWrapperStyles {...rest}>{children}</IconWrapperStyles>
}

export default IconWrapper
