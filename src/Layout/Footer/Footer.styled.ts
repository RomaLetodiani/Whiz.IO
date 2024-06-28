import styled from "styled-components"

const FooterStyles = styled.footer`
  max-width: 1440px;
  margin-inline: auto;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 20px;
  }

  p {
    padding-top: 3px;
    color: #667085;
    font-family: "mtavruliMedium";
  }
`

const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  p {
    margin-block: 20px;
  }

  .footerTopRight {
    h4 {
      font-family: "mtavruliBold";
      color: #6941c6;
    }

    ul {
      display: flex;
      gap: 20px;
      flex-direction: column;

      @media (max-width: 808px) {
        flex-direction: row;
        gap: 10px;
      }
      margin-top: 15px;
      li {
        display: flex;
        align-items: center;
        gap: 5px;
        h5 {
          font-family: "mtavruliMedium";
          padding-top: 3px;
          color: #667085;
        }
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    li {
      margin-bottom: 10px;
      font-family: "mtavruliBold";
      color: #475467;
      cursor: pointer;
      &:hover {
        color: #6941c6;
      }
    }
  }
`

const FooterBottom = styled.div`
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px 0;
  img {
    width: 20px;
    margin-right: 10px;
  }

  span {
    display: flex;
    align-items: center;
  }
`

export { FooterStyles, FooterTop, FooterBottom }
