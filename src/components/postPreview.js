import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
// import ReadLink from "./readLink"
import "@fontsource/pt-serif"
import "@fontsource/playfair-display/900.css"
import "@fontsource/playfair-display/700.css"

const PostPreviewLink = styled(Link)`
  /* color: teal; */
  text-decoration: none;
`

const PostDateP = styled("p")`
  margin-top: 0;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0;
`

export default function PostPreview(props) {
  return (
    <React.Fragment>
      <article
        css={css`
          :first-of-type {
            margin-top: 1rem;
          }
        `}
      >
        <PostPreviewLink to={props.post.slug}>
          <h3
            css={css`
              font-weight: 800;
              margin-bottom: 0;
              font-size: 1.25rem;
            `}
          >
            {props.post.title}
          </h3>
        </PostPreviewLink>
        {props.post.date ? <PostDateP>{props.post.date}</PostDateP> : null}
        <p
          css={css`
            font-family: "PT Serif";
          `}
        >
          {props.post.excerpt}
        </p>

        {/* <ReadLink to={props.post.slug}>read &rarr;</ReadLink> */}
      </article>
    </React.Fragment>
  )
}
