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
            id
            url
          }
        }
      }`
  ).then(result => {
    result.data.strapi.articles.forEach(({ url, id }) => {
      createPage({
        path: `/${url}`,
        component: path.resolve(`src/templates/article.tsx`),
        context: {
          id,
        },
      })
    })
  })

  return getArticles
}
