import React from 'react';
import { graphql } from 'gatsby';
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
    markdownRemark: {
      html: string;
      frontmatter: {
        date: string;
        title: string;
        description: string;
      };
    };
  };
}

const ArticleTemplate = ({ data }: Props) => {
  const { html, frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <StyledArticleHeader>{frontmatter.title}</StyledArticleHeader>
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default ArticleTemplate;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
