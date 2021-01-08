import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import ReadLink from "../components/readLink"
import { MDXRenderer } from "gatsby-plugin-mdx"
// import "@fontsource/inter/400.css"
import Img from "gatsby-image"

export default function blogPostTemplate({ data }) {
  //   console.log(data)
  return (
    <Layout>
      <Img fluid={data.mdx.frontmatter.image.childImageSharp.fluid} />
      <h2>{data.mdx.frontmatter.title}</h2>
      <div
        css={css`
          font-weight: 500;
        `}
      >
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>

      <p
        css={css`
          font-weight: bold;
        `}
      >
        {data.mdx.fields.author}
      </p>
      <ReadLink to="/">&larr; back to homepage</ReadLink>
      <pre>
        {JSON.stringify(
          data.mdx.frontmatter.image.childImageSharp.fluid,
          null,
          2
        )}
      </pre>
    </Layout>
  )
}

// this query loads the data
export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid {
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

// gatsby blog
// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description
//       }
//     }
//   }
// `
