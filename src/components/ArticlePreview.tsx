import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import getDate from "../lib/getDate";

interface IProps {
  title: string;
  created_at: string;
  url: string;
  description: string;
}

const StyledArticle = styled.article`
  display: flex;
  align-items: stretch;
  position: relative;
  margin-bottom: 35px;
`;

const FlairRectangle = styled.div`
  margin-right: 2rem;
  width: 30px;
  border-radius: 4px;
  background-color: #4132c9;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1;
  font-size: 3rem;
  a {
    color: ${({ theme }) => theme.black};
    text-decoration: none;
  }
`;

const CreatedAt = styled.p`
  margin: 14px 0 0 0;
  line-height: 1;
  color: ${({ theme }) => theme.black};
`;

const ArticlePreview = ({ title, created_at, url, description }: IProps) => {
  const date = getDate(created_at);

  return (
    <StyledArticle>
      <FlairRectangle />
      <div>
        <header>
          <Title>
            <Link to={`${url}`}>{title}</Link>
          </Title>
          <p>{description}</p>
          <CreatedAt>{date}</CreatedAt>
        </header>
      </div>
    </StyledArticle>
  );
};

export default ArticlePreview;
