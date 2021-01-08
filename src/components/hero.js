import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function Hero() {
  return (
    <div
      css={css`
        color: whitesmoke;
        display: flex;
      `}
    >
      <h2
        css={css`
          max-width: 26rem;
          line-height: 1.4;
          font-weight: bold;
          font-size: 1.7rem;
        `}
      >
        Hey Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
        facere!
      </h2>
      {/* <img
        src="./snow.png"
        css={css`
          background-size: contain;
          object-fit: contain;
          z-index: 99;
          height: 290px;
        `}
      ></img> */}
    </div>
  )
}
