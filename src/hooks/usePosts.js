import { graphql, useStaticQuery } from "gatsby"

export default function usePosts() {
  const data = useStaticQuery(graphql`
    {
      allMdx(limit: 1000, sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  `)
  // console.log(data.allMdx.nodes)
  return data.allMdx.nodes.map(post => ({
    excerpt: post.excerpt,
    title: post.frontmatter.title,
    slug: post.fields.slug,
    date: post.frontmatter.date,
  }))
}
