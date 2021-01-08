import { graphql, useStaticQuery } from "gatsby"

export default function usePosts() {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          excerpt
          frontmatter {
            title
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
  }))
}
