const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query ArticlesQuery {
      allStrapiArticles {
        edges {
          node {
            id
            title
            description
            content
            created_at(fromNow: true)
          }
        }
      }
  }
  `)

  result.data.allStrapiArticles.edges.forEach(({ node }) => {
    createPage({
      path: node.id,
      component: path.resolve(`./src/templates/strapiArticle.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        id: node.id,
      },
    })
  })
}