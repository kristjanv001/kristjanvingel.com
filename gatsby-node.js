// We want to use each mdx file name to create the page slug
// ===============================================================

// The gatsby-source-filesystem plugin ships with a function for creating slugs.
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

// To get the file name from the Mdx node we need to traverse the “node graph” to its parent File node, as File nodes contain data we need about files on disk. We use the getNode() helper. Add it to onCreateNode’s function parameters, and call it to get the file node.
exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `Mdx`) {
    const fileNode = getNode(node.parent)
    const { createNodeField } = actions
    let slug = fileNode.name

    // || createFilePath({ node, getNode, basePath: `pages` })

    // Now we can add our new slugs directly onto the Mdx nodes. Any data we add is available to query later with GraphQL. When it comes time to create the pages, it’ll be easy to get the slug.
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })

    createNodeField({
      name: "author",
      node,
      value: node.frontmatter.author || "Kristjan",
    })
  }
}

// To create pages, we use onCreateNode and createPages APIs
// ===============================================================
exports.createPages = async ({ graphql, actions, reporter }) => {
  // **Note:** The graphql function call returns a Promise
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Creating a post failed.", result.errors)
  }

  // console.log(result.data.allMdx.nodes)
  // console.log(JSON.stringify(result, null, 4))
  result.data.allMdx.nodes.forEach(node => {
    // console.log(node.fields.slug)
    actions.createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blogPost.js`),
      // Data passed to context is available in page queries as GraphQL variables!!!
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
