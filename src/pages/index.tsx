import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArticlePreview from '../components/ArticlePreview';

interface ArticlePreview {
  id: string;
  title: string;
  description: string;
  url: string;
  created_at: string;
}

interface FrontmatterBullshit {
  allMarkdownRemark: {
    edges: Array<{
      node: {
        fields: {
          slug: string;
        };
        frontmatter: {
          title: string;
          description: string;
          date: string;
        };
        id: string;
      };
    }>;
  };
}

export interface Props {
  data: FrontmatterBullshit;
}

const ArticleList = styled.ul`
  margin: 0;
`;

const ArticleListItem = styled.li`
  list-style: none;
  margin-bottom: 2em;
`;

const transformFrontmatterIntoActualGoodObjectWhileDefeatingEntirePurposeOfGraphQL = (
  data: FrontmatterBullshit
): ArticlePreview[] => {
  const rawArticles = data.allMarkdownRemark.edges;

  return rawArticles.map(rawArticle => ({
    id: rawArticle.node.id,
    title: rawArticle.node.frontmatter.title,
    description: rawArticle.node.frontmatter.description,
    url: rawArticle.node.fields.slug,
    created_at: rawArticle.node.frontmatter.date,
  }));
};

const IndexPage = ({ data }: Props) => {
  const articles = transformFrontmatterIntoActualGoodObjectWhileDefeatingEntirePurposeOfGraphQL(
    data
  );

  return (
    <Layout>
      <SEO title="Home" />
      <ArticleList>
        {articles.map(({ id, ...rest }) => (
          <ArticleListItem key={id}>
            <ArticlePreview {...rest} />
          </ArticleListItem>
        ))}
      </ArticleList>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query BlogRollQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
