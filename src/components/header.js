import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import "@fontsource/inter/200.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/900.css"
import MobileMenuIcon from "./mobileMenuIcon"

// bad for performance?
const NavLink = styled(Link)`
  font-size: 1rem;
  margin: 0 0 0 0.5rem;
  padding: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease-in 0s;
  height: 100%;
  font-weight: 400;
  color: #f1695e;
  &:last-of-type {
    margin-right: 0;
  }

  &.current-page,
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (min-width: 600px) {
    font-size: 1.1rem;
    margin: 0 0 0 0.5rem;
    padding: 0.5rem;
    transition: all 0.3s ease-in 0s;
    height: 100%;
    font-weight: 400;
    color: #f1695e;
  }

  &:last-of-type {
    margin-right: 0;
  }

  &.current-page,
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`

// bad for performance?
const TitleLink = styled(Link)`
  font-weight: 200;
  text-decoration: none;
  font-size: 1.4rem;
  /* text-shadow: -4px 1px 0 #000, -10px 5px 0 #0a0e27; */
  /* transform: rotate(-4deg); */
  line-height: 1;
  letter-spacing: -1px;
  /* text-transform: uppercase; */
  color: #f1695e;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  :visited {
    color: #f1695e;
  }

  @media (min-width: 600px) {
    font-size: 2.5rem;
  }
`

export default function Header(props) {
  return (
    <header
      css={css`
        z-index: 2;
        position: relative;
        font-family: Inter;
        /* padding: 2em 0; */
        display: flex;
        height: 100px;

        width: 100%;

        @media (min-width: 600px) {
          /* padding: 4em 0; */
          height: 200px;
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
          <div
            css={css`
              width: 100%;
              display: flex;
              align-items: center;
            `}
          >
            <div
              tabIndex={0}
              role="button"
              onKeyDown={() => props.setIsOpen(prevState => !prevState)}
              onClick={() => props.setIsOpen(prevState => !prevState)}
              css={css`
                outline: none;
                @media (min-width: 600px) {
                  display: none;
                }
              `}
            >
              <MobileMenuIcon isOpen={props.isOpen} />
            </div>

            <div
              css={css`
                @media (max-width: 600px) {
                  display: none;
                }
              `}
            >
              <NavLink activeClassName="current-page" to="/">
                Blog
              </NavLink>
              <NavLink activeClassName="current-page" to="/about">
                About
              </NavLink>
              <NavLink activeClassName="current-page" to="/contact">
                Contact
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

// navlink copy
/* const NavLink = styled(Link)`
  font-size: 1rem;
  margin: 0 0 0 0.5rem;
  padding: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease-in 0s;
  height: 100%;
  font-weight: 400;
  color: #f1695e;
  &:last-of-type {
    margin-right: 0;
  }

  &.current-page,
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
` */
