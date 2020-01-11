const path = require("path")
const graphql = require("gatsby").graphql

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("src/templates/blogPost.js")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              title
              path
              date
              author
            }
          }
        }
      }
    }
  `).then(response => {
    if (response.errors) {
      return Promise.reject(response.errors)
    } else {
      response.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: postTemplate,
        })
      })
    }
  })
}
