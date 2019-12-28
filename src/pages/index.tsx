import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

interface ArticlePreview {
  id: string
  title: string
  description: string
  url: string
}

export interface Props {
  data: {
    strapi: {
      articles: ArticlePreview[]
    }
  }
}

const IndexPage = ({ data }: Props) => {
  const articles = data.strapi.articles

  return (
    <Layout>
      <SEO title="Home" />
      {articles.map(({ id, title, description, url }) => (
        <ul>
          <li>
            <article key={id}>
              <h3>
                <Link to={`/${url}`}>{title}</Link>
              </h3>
              <p>{description}</p>
            </article>
          </li>
        </ul>
      ))}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query AllArticles {
    strapi {
      articles(limit: 30, where: { language_ne: "ru" }) {
        id
        title
        description
        url
      }
    }
  }
`
