import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  color: whitesmoke;
  font-size: 1rem;
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease-in 0s;
  /* transition: 0.3s; */
  border-radius: 3px;

  &:last-of-type {
    margin-right: 0;
  }

  &.current-page,
  &:hover {
    color: whitesmoke;
    background: rgba(255, 255, 255, 0.2);
  }
`

const TitleLink = styled(Link)`
  color: whitesmoke;
  font-weight: bold;
  margin: 0.5rem 0.5rem 0.5rem 0;
  text-decoration: none;
  font-size: 1.2rem;
  text-transform: uppercase;
`

export default function Header() {
  return (
    <header
      css={css`
        background-image: linear-gradient(
          109.6deg,
          rgba(48, 207, 208, 1) 11.2%,
          rgba(51, 8, 103, 1) 92.5%
        );
        background-image: linear-gradient(
          112.1deg,
          rgba(32, 38, 57, 1) 11.4%,
          rgba(63, 76, 119, 1) 70.2%
        );
        height: 300px;
        /* rgb(0,128,128) teal*/
        /* rgb(16,23,35, 1) */
      `}
    >
      <div
        css={css`
          max-width: 90vw;
          width: 750px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 auto 4rem;
        `}
      >
        <TitleLink to="/">Kristjan Vingel</TitleLink>
        <nav
          css={css`
            margin-top: 0;
          `}
        >
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
