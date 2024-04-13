import { createGlobalStyle } from "styled-components"

// Mkhedruli
import TBCBlack from "./Assets/Fonts/Mkhedruli/TBCContractica-Black.ttf"
import TBCBold from "./Assets/Fonts/Mkhedruli/TBCContractica-Bold.ttf"
import TBCBook from "./Assets/Fonts/Mkhedruli/TBCContractica-Book.ttf"
import TBCLight from "./Assets/Fonts/Mkhedruli/TBCContractica-Light.ttf"
import TBCMedium from "./Assets/Fonts/Mkhedruli/TBCContractica-Medium.ttf"
import TBCRegular from "./Assets/Fonts/Mkhedruli/TBCContractica-Regular.ttf"

// Mtavruli
import TBCBlackCaps from "./Assets/Fonts/Mtavruli/TBCContracticaCAPS-Black.ttf"
import TBCBoldCaps from "./Assets/Fonts/Mtavruli/TBCContracticaCAPS-Bold.ttf"
import TBCBookCaps from "./Assets/Fonts/Mtavruli/TBCContracticaCAPS-Book.ttf"
import TBCLightCaps from "./Assets/Fonts/Mtavruli/TBCContracticaCAPS-Light.ttf"
import TBCMediumCaps from "./Assets/Fonts/Mtavruli/TBCContracticaCAPS-Medium.ttf"
import TBCRegularCaps from "./Assets/Fonts/Mtavruli/TBCContracticaCAPS-Regular.ttf"

const mkhedruliFontFaces = `
  @font-face {
    font-family: 'mkhedruliBlack';
    src: url(${TBCBlack}) format('truetype');
    font-weight: 900;
  }

  @font-face {
    font-family: 'mkhedruliBold';
    src: url(${TBCBold}) format('truetype');
    font-weight: bold;
  }

  @font-face {
    font-family: 'mkhedruliBook';
    src: url(${TBCBook}) format('truetype');
    font-weight: normal;
  }

  @font-face {
    font-family: 'mkhedruliLight';
    src: url(${TBCLight}) format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'mkhedruliMedium';
    src: url(${TBCMedium}) format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'mkhedruliRegular';
    src: url(${TBCRegular}) format('truetype');
    font-weight: normal;
  }
`

// Create font-face rules for Mtavruli font variations
const mtavruliFontFaces = `
  @font-face {
    font-family: 'mtavruliBlack';
    src: url(${TBCBlackCaps}) format('truetype');
    font-weight: 900;
  }

  @font-face {
    font-family: 'mtavruliBold';
    src: url(${TBCBoldCaps}) format('truetype');
    font-weight: bold;
  }

  @font-face {
    font-family: 'mtavruliBook';
    src: url(${TBCBookCaps}) format('truetype');
    font-weight: normal;
  }

  @font-face {
    font-family: 'mtavruliLight';
    src: url(${TBCLightCaps}) format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'mtavruliMedium';
    src: url(${TBCMediumCaps}) format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'mtavruliRegular';
    src: url(${TBCRegularCaps}) format('truetype');
    font-weight: normal;
  }
`

const GlobalStyle = createGlobalStyle`
    
    ${mkhedruliFontFaces}
    ${mtavruliFontFaces}
    

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'mkhedruliRegular', sans-serif; /* Apply the custom font as a fallback */ 
    }

`

export default GlobalStyle
