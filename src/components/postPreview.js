import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import ReadLink from "./readLink"

export default function PostPreview(props) {
  console.log(props.post)
  return (
    <React.Fragment>
      <article
        css={css`
          margin-top: 0.75rem;
          padding-bottom: 1rem;

          :first-of-type {
            margin-top: 1rem;
          }
        `}
      >
        <Link to={props.post.slug}>
          <h3>{props.post.title}</h3>
        </Link>
        <p>{props.post.excerpt}</p>
        <ReadLink to={props.post.slug}>read &rarr;</ReadLink>
      </article>
    </React.Fragment>
  )
}
