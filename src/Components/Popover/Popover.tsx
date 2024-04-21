import React from "react"
import styled from "styled-components"

interface PopoverProps {
  children: React.ReactNode
  content: React.ReactNode
  position:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "bottom-left"
    | "bottom-right"
    | "top-left"
    | "top-right"
}

const PopoverContainer = styled.div<{ $position: string }>`
  position: relative;

  &:hover .popover {
    visibility: visible;
    opacity: 1;
  }
`

const PopoverContent = styled.div<{ $position: string }>`
  position: absolute;
  z-index: 1;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s;
  width: max-content;

  ${({ $position }) => {
    switch ($position) {
      case "top":
        return `
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
        `
      case "bottom":
        return `
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
        `
      case "left":
        return `
          top: 50%;
          right: 100%;
          transform: translateY(-50%);
        `
      case "right":
        return `
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
        `
      case "bottom-left":
        return `
          top: 100%;
          left: 0;
        `
      case "bottom-right":
        return `
          top: 100%;
          right: 0;
        `
      case "top-left":
        return `
          bottom: 100%;
          left: 0;
        `
      case "top-right":
        return `
          bottom: 100%;
          right: 0;
        `
      default:
        return ""
    }
  }}
`

const Popover: React.FC<PopoverProps> = ({ children, content, position }) => {
  return (
    <PopoverContainer $position={position}>
      {children}
      {
        <PopoverContent className="popover" $position={position}>
          {content}
        </PopoverContent>
      }
    </PopoverContainer>
  )
}

export default Popover
