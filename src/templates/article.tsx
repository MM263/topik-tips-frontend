import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

interface Article {
  title: string;
  description: string;
  body: string;
  url: string;
  updated_at: string;
}

export interface Props {
  data: {
    strapi: {
      article: Article;
    };
  };
}

const ArticleTemplate = ({ data }: Props) => {
  const { title, body } = data.strapi.article;

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{body}</p>
    </Layout>
  );
};

export default ArticleTemplate;

export const query = graphql`
  query Article($id: ID!) {
    strapi {
      article(id: $id) {
        title
        description
        body
        url
        updated_at
      }
    }
  }
`;
