import React from "react"
import { css } from "@emotion/react"
import "@fontsource/pt-serif"
import "@fontsource/inter/500.css"

export default function Hero() {
  return (
    <React.Fragment>
      <div
        css={css`
          max-width: 90vw;
          width: 750px;
          margin: 0 auto;
          /* color: #babaef; */
          color: white;
          padding: 0 0 2em;

          @media (min-width: 600px) {
            padding: 0 0 4em;
          }
        `}
      >
        <p
          css={css`
            line-height: 1.2;
            font-weight: bold;
            font-size: 1.7rem;
            margin: 0;
            font-family: "Inter";

            @media (min-width: 600px) {
              font-size: 3.2rem;
              max-width: 90%;
            }
          `}
        >
          I make people's lives better by sharing invaluable insights.
        </p>

        <p
          css={css`
            line-height: 1.4;
            font-weight: 500;
            font-size: 1rem;
            margin-top: 1em;
            font-family: "Inter";

            @media (min-width: 600px) {
              font-size: 1.2rem;
              max-width: 80%;
            }
          `}
        >
          Software engineer from Tallinn, Estonia
        </p>
      </div>
    </React.Fragment>
  )
}
