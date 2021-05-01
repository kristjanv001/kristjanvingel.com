import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/react"
// import { Link, graphql, useStaticQuery } from "gatsby"
// import "@fontsource/pt-serif"
import "@fontsource/inter/500.css"

export default function Footer() {
  return (
    <footer>
      <div
        css={css`
          max-width: 90vw;
          width: 750px;
          margin: 0 auto;
          color: whitesmoke;
          padding: 1em 0;
          font-family: Inter;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          > div {
            margin: 0;
          }
          @media (min-width: 600px) {
            padding: 6em 0;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        `}
      >
        <p
          css={css`
            line-height: 1.4;
            font-size: 1.2rem;
            margin: 0;

            text-transform: uppercase;

            @media (min-width: 600px) {
              /* font-size: 1.9rem; */
              max-width: 80%;
            }
          `}
        >
          Kristjan Vingel
        </p>
        <div
          css={css`
            display: flex;
            align-items: center;
            > p {
              margin: 0;
              margin-right: 0.5em;
              /* background: yellow; */
            }
            > a {
              margin: 0;
            }
          `}
        >
          <p>
            <a href="https://github.com/kristjanv001">Github</a>
          </p>
          <a href="https://twitter.com/kristjanv001">Twitter</a>
        </div>
      </div>
    </footer>
  )
}
