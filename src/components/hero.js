import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/react"
// import { Link, graphql, useStaticQuery } from "gatsby"
import "@fontsource/pt-serif"
export default function Hero() {
  return (
    <React.Fragment>
      <div
        css={css`
          max-width: 90vw;
          width: 750px;
          margin: 0 auto;
          color: whitesmoke;
          padding: 1em 0 3em;

          @media (min-width: 600px) {
            padding: 2em 0 4em;
          }
        `}
      >
        <p
          css={css`
            line-height: 1.4;
            font-weight: bold;
            font-size: 1.2rem;
            margin: 0;
            /* font-style: italic; */
            font-family: "PT Serif";

            @media (min-width: 600px) {
              font-size: 1.9rem;
              max-width: 80%;
            }
          `}
        >
          If I'm not blogging about life-altering books or self-improvement,
          then I must be building something amazing.
        </p>
      </div>
    </React.Fragment>
  )
}

/* <img
        src="./snow.png"
        css={css`
          background-size: contain;
          object-fit: contain;
          z-index: 99;
          height: 290px;
        `}
      ></img> */

/* I’m an Estonian software <strong>engineer</strong>. If I'm not{" "}
        <strong>blogging</strong> about life-altering books or{" "}
        <strong>self improvement</strong>, then I must be building something
        amazing. */
