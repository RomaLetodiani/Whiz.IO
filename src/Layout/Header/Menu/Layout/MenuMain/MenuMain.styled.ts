import styled from "styled-components"

export const MenuMainStyles = styled.div`
  display: flex;
  gap: 48px;

  /* Mobile Menu */
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    border: 1px solid #eaecf0;
    padding-block: 16px;
    border-radius: 12px;
    gap: 24px;

    /* Shadow/lg */
    box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
      0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  }
`

export const MenuTitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 200px;

  /* Mobile Menu */
  @media screen and (max-width: 1000px) {
    border-bottom: 1px solid #eaecf0;
    padding: 16px;
  }
`

export const MenuItemTitlesStyles = styled.div<{ $selected: boolean }>`
  p {
    line-height: 24px;
    color: ${({ $selected }) => ($selected ? "#8C64F0" : "#475467")};
    font-weight: 700;
    cursor: pointer;
  }
`

export const MenuItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0 48px;

  /* Large Screen */
  @media screen and (min-width: 1000px) {
    max-height: 460px;
    overflow: auto;
  }

  /* Mobile Menu */
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`
