import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const ArticleTemplate = ({ data }) => {
  const { title, body } = data.strapi.article

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{body}</p>
    </Layout>
  )
}
export default ArticleTemplate

export const query = graphql`
  query Article($id: ID!) {
    strapi {
      article(id: $id) {
        title
        body
        url
      }
    }
  }
`
