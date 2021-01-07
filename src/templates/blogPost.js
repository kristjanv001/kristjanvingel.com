import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import ReadLink from "../components/readLink"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "@fontsource/inter/400.css"

export default function blogPostTemplate({ data }) {
  console.log(data)
  return (
    <Layout>
      <h2>{data.mdx.frontmatter.title}</h2>
      <div
        css={css`
          font-weight: 400;
        `}
      >
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>

      <p>{data.mdx.fields.author}</p>
      <ReadLink to="/">&larr; back to homepage</ReadLink>
      {/* <pre>{JSON.stringify(data.mdx.body, null, 2)}</pre> */}
    </Layout>
  )
}

// this query loads the data
export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
      fields {
        author
        slug
      }
    }
  }
`
