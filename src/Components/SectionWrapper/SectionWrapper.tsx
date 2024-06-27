import { ReactNode } from "react"
import { SectionWrapperStyles } from "./SectionWrapperStyles"

type Props = {
  children: ReactNode
  paddingOn?: boolean
}

const SectionWrapper = ({ children, paddingOn = true }: Props) => {
  return (
    <SectionWrapperStyles paddingOn={paddingOn}>
      {children}
    </SectionWrapperStyles>
  )
}

export default SectionWrapper
