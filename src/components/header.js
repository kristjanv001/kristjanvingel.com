import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import "@fontsource/inter/600.css"
import "@fontsource/inter/900.css"

// bad for performance?
const NavLink = styled(Link)`
  font-size: 1rem;
  /* line-height: 1; */
  margin: 0 0 0 0.5rem;
  padding: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease-in 0s;
  height: 100%;
  font-weight: 600;
  color: #8bcdcd;
  &:last-of-type {
    margin-right: 0;
    /* padding-right: 0; */
  }

  &.current-page,
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    /* color: whitesmoke; */
  }
`

// bad for performance?
const TitleLink = styled(Link)`
  font-weight: 900;
  text-decoration: none;
  font-size: 1.2rem;
  /* text-shadow: -4px 1px 0 #000, -10px 5px 0 #0a0e27; */
  /* transform: rotate(-4deg); */
  line-height: 1;
  letter-spacing: 1px;
  text-transform: uppercase;
  /* color: #01808d; */
  color: #f1695e;

  :visited {
    color: #f1695e;
  }

  @media (min-width: 600px) {
    font-size: 2.8rem;
  }
`

export default function Header() {
  return (
    <header
      css={css`
        font-family: Inter;
        padding: 2em 0;

        @media (min-width: 600px) {
          padding: 4em 0;
        }
      `}
    >
      <div
        css={css`
          max-width: 90vw;
          width: 750px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          /* border: 2px solid blue; */

          @media (min-width: 600px) {
            /* margin: 2em auto; */
          }
        `}
      >
        <TitleLink to="/">Kristjan Vingel</TitleLink>
        <nav>
          <NavLink activeClassName="current-page" to="/">
            Blog
          </NavLink>
          <NavLink activeClassName="current-page" to="/about">
            About
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
