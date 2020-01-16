const path = require("path")
const graphql = require("gatsby").graphql

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("src/templates/blogPost.js")
  const projectTemplate = path.resolve("src/templates/project.js")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              type
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
        let component

        switch (node.frontmatter.type) {
          case "Blog":
            component = postTemplate
            break
          case "Project":
            component = projectTemplate
            break
          default:
            break
        }

        createPage({
          path: node.frontmatter.path,
          component,
        })
      })
    }
  })
}
