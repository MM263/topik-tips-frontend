import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const ArticleTemplate = ({ data }) => {
  const { title, body } = data.strapi.articles[0]

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{body}</p>
    </Layout>
  )
}
export default ArticleTemplate
export const query = graphql`
  query Article($slug: String!) {
    strapi {
      articles(where: { url: $slug }) {
        id
        title
        body
        url
      }
    }
  }
`
