import React from "react"
import { css } from "@emotion/react"
import "@fontsource/pt-serif"
export default function Hero() {
  return (
    <React.Fragment>
      <div
        css={css`
          max-width: 90vw;
          width: 750px;
          margin: 0 auto;
          color: white;
          padding: 0 0 2em;

          @media (min-width: 600px) {
            padding: 0 0 4em;
          }
        `}
      >
        <p
          css={css`
            line-height: 1.4;
            font-weight: bold;
            font-size: 1.6rem;
            margin: 0;
            font-family: "Inter";

            @media (min-width: 600px) {
              font-size: 1.9rem;
              max-width: 80%;
            }
          `}
        >
          I'm an <span>Estonian</span> coder who likes to help people with
          self-improvement.
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
