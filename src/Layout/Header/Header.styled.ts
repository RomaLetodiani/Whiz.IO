import styled from "styled-components"

const HeaderStyles = styled.header`
  padding: 32px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 20px;
  }
`

const Logo = styled.div`
  img {
    width: clamp(130px, 10vw, 170px);
  }
`

const HeaderWrapperStyles = styled.div<{ $full: boolean }>`
  position: fixed;
  z-index: 1000;
  top: ${({ $full }) => ($full ? "0" : "20px")};
  left: ${({ $full }) => ($full ? "0" : "5%")};
  transition: all 0.3s ease-in-out;
  width: ${({ $full }) => ($full ? "100%" : "90%")};
  border-radius: ${({ $full }) => ($full ? "0" : "24px")};
  border: 1px solid #e5e7eb;
  background-image: url("/src/Assets/Images/Home/hero-gradient.png");
  background-color: #fff;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
`

export { HeaderStyles, HeaderWrapperStyles, Logo }
