import { MobileMenuStyles } from "./MobileMenu.styled"

const MobileMenu = ({ open }: { open: boolean }) => {
  return (
    <MobileMenuStyles open={open}>
      <ul>
        <li>პროდუქტი</li>
        <li>ფასები</li>
        <li>ინტეგრაციები</li>
        <li>მომხმარებლები</li>
        <li>რესურსები</li>
      </ul>
    </MobileMenuStyles>
  )
}

export default MobileMenu
