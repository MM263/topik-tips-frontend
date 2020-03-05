import React from 'react';
import { graphql } from 'gatsby';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';

import Layout from '../components/Layout';

interface Article {
  title: string;
  description: string;
  body: string;
  url: string;
  updated_at: string;
}

const StyledArticleHeader = styled.h1`
  color: ${({ theme }) => theme.purple};
  font-size: 3rem;
  border-bottom: 1px dotted ${({ theme }) => theme.purple};
`;

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
      <StyledArticleHeader>{title}</StyledArticleHeader>
      <Markdown>{body}</Markdown>
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
