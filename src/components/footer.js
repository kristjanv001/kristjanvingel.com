import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/react"
// import { Link, graphql, useStaticQuery } from "gatsby"
// import "@fontsource/pt-serif"
import "@fontsource/inter/500.css"

export default function Footer() {
  return (
    <React.Fragment>
      <div
        css={css`
          max-width: 90vw;
          width: 750px;
          margin: 0 auto;
          color: whitesmoke;
          padding: 1em 0;

          @media (min-width: 600px) {
            padding: 2em 0;
          }
        `}
      >
        <p
          css={css`
            line-height: 1.4;
            font-size: 1.2rem;
            margin: 0;
            font-family: Inter;

            @media (min-width: 600px) {
              font-size: 1.9rem;
              max-width: 80%;
            }
          `}
        >
          Kristjan Vingel
        </p>
      </div>
    </React.Fragment>
  )
}
