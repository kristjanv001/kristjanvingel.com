import { graphql, useStaticQuery } from "gatsby"

export default function usePosts() {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          excerpt
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `)
  //   console.log(data.allMdx.nodes)
  return data.allMdx.nodes.map(post => ({
    excerpt: post.excerpt,
    slug: post.frontmatter.slug,
    title: post.frontmatter.title,
  }))
}
