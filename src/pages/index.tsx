import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import ArticlePreview from "../components/ArticlePreview";

interface ArticlePreview {
  id: string;
  title: string;
  description: string;
  url: string;
  created_at: string;
}

export interface Props {
  data: {
    strapi: {
      articles: ArticlePreview[];
    };
  };
}

const ArticleListItem = styled.li`
  list-style: none;
`;

const IndexPage = ({ data }: Props) => {
  const articles = data.strapi.articles;

  return (
    <Layout>
      <SEO title="Home" />
      <ul>
        {articles.map(({ id, ...rest }) => (
          <ArticleListItem key={id}>
            <ArticlePreview {...rest} />
          </ArticleListItem>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query AllArticles {
    strapi {
      articles(limit: 30, where: { language_ne: "ru" }) {
        id
        title
        description
        url
        created_at
      }
    }
  }
`;
