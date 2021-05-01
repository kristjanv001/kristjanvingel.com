import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import ReadLink from "../components/readLink"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import "@fontsource/inter/900.css"

export default function blogPostTemplate({ data }) {
  // console.log(data)
  return (
    <Layout>
      <h1
        css={css`
          font-size: 2.8rem;
          font-weight: 900;
          margin-bottom: 0;
          line-height: 1.1;
        `}
      >
        {data.mdx.frontmatter.title}
      </h1>
      <p
        css={css`
          margin-top: 2px;
          font-size: 0.9rem;
          font-weight: 700;
        `}
      >
        {data.mdx.frontmatter.date ? (
          <span>{data.mdx.frontmatter.date}</span>
        ) : null}
      </p>
      <div
        css={css`
          max-width: 100%;
          margin: 0;

          @media (min-width: 600px) {
            max-width: 90%;
            margin: 0 auto 2em;
            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
          }
        `}
      >
        {data.mdx.frontmatter.image ? (
          <Img fluid={data.mdx.frontmatter.image.childImageSharp.fluid} />
        ) : null}
      </div>

      <div
        css={css`
          hyphens: auto;
          margin-bottom: 2rem;
        `}
      >
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>

      {/* <p>
        {data.mdx.fields.author}
      </p> */}
      <ReadLink to="/">&larr; back to homepage</ReadLink>
      {/* <pre>
        {JSON.stringify(
          data.mdx.frontmatter.image.childImageSharp.fluid,
          null,
          2
        )}
      </pre> */}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            # Specify a fluid image and fragment
            # The default maxWidth is 800 pixels
            # quality (int, default: 50)
            fluid(quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
      fields {
        author
        slug
      }
    }
  }
`
