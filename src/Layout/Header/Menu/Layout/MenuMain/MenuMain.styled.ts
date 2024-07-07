import styled from "styled-components"

export const MenuMainStyles = styled.div`
  display: flex;
  gap: 48px;
`

export const MenuTitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 200px;
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
`
