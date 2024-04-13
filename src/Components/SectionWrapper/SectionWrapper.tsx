import { ReactNode } from "react"
import { SectionWrapperStyles } from "./SectionWrapperStyles"

type Props = {
  children: ReactNode
}

const SectionWrapper = ({ children }: Props) => {
  return <SectionWrapperStyles>{children}</SectionWrapperStyles>
}

export default SectionWrapper
