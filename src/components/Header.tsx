import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

export interface Props {
  siteTitle: string;
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

const Title = styled(Link)`
  font-size: 4rem;
  text-decoration: none;
  color: #393939;
`;

const Header = ({ siteTitle = "" }: Props) => (
  <StyledHeader>
    <h1>
      <Title to="/">{siteTitle}</Title>
    </h1>
    <Link to="/about">About</Link>
  </StyledHeader>
);

export default Header;
