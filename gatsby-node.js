const path = require("path")

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        return result
      })
    )
  })

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const getArticles = makeRequest(
    graphql,
    `query AllArticles {
        strapi {
          articles(where: { language_ne: "ru" }) {
            url
          }
        }
      }`
  ).then(result => {
    result.data.strapi.articles.forEach(({ url }) => {
      createPage({
        path: `/${url}`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          slug: url,
        },
      })
    })
  })

  return getArticles
}
