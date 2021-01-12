import styled from "@emotion/styled"
import React from "react"

const StyledMobileNavButton = styled.button`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 2px;
  margin: 0;
  z-index: 10;

  :focus {
    outline: none;
  }

  div {
    background: white;
    transition: transform 250ms cubic-bezier(0.2, 0.6, 0.3, 1);
    display: block;
    margin: auto;
    width: 100%;
    height: 1px;
    transform-origin: 1px;

    :first-of-type {
      transform: ${props => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-of-type(2) {
      /* visibility: hidden; */
      opacity: ${props => (props.isOpen ? "0" : "1")};
      transform: ${props => (props.isOpen ? "translateX(0)" : "translateX(0)")};
    }

    :nth-of-type(3) {
      transform: ${props => (props.isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

export default function MobileMenuIcon(props) {
  return (
    <StyledMobileNavButton isOpen={props.isOpen}>
      <div></div>
      <div></div>
      <div></div>
    </StyledMobileNavButton>
  )
}
