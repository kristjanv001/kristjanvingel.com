import styled from "@emotion/styled"
import { css } from "@emotion/react"
import React from "react"
import { Link } from "gatsby"

const MobileMenuLinks = styled.nav`
  /* visibility: ${props => (props.isOpen ? "1" : "0")}; */

  /* transform: ${props => (props.isOpen ? "scale(1)" : "scale(0)")}; */
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  /* transform: ${props =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"}; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  /* height: 100%; */
  background: #000080;
  /* height: calc(100vh - 100px); */
  height: 100vh;
  z-index: 110;
  transition: transform 0.3s ease-in;
  transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);

  position: absolute;
  top: 0;
  left: 0;
  /* border-top: #f1695e 1px solid; */

  @media (min-width: 600px) {
    display: none;
  }
`

const MobileMenuLink = styled(Link)`
  font-family: Inter;
  font-weight: 500;
  font-size: 2rem;
  color: #f1695e;
  text-decoration: none;
  padding: 0.5rem;

  &.current-page {
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  }
`

export default function MobileMenu(props) {
  return (
    <MobileMenuLinks isOpen={props.isOpen}>
      <div
        css={css`
          margin: auto 0;
        `}
      >
        <ul>
          <li>
            <MobileMenuLink activeClassName="current-page" to="/">
              Blog
            </MobileMenuLink>
          </li>
          <li>
            <MobileMenuLink activeClassName="current-page" to="/about">
              About
            </MobileMenuLink>
          </li>
          <li>
            <MobileMenuLink activeClassName="current-page" to="/contact">
              Contact
            </MobileMenuLink>
          </li>
        </ul>
      </div>

      <div
        css={css`
          height: 100px;
          width: 100%;
          /* background: pink; */
        `}
      >
        {/* mobile menu footer */}
      </div>
    </MobileMenuLinks>
  )
}
