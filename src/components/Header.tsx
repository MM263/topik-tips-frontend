import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

export interface Props {
  siteTitle: string;
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  max-width: 800px;
  margin: 0 auto 1rem auto;

  h1 {
    margin: 0;
    padding: 0;
  }
`;

const Title = styled(Link)`
  font-size: 2.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  line-height: 1.5;
`;

const AboutUs = styled(Link)`
  color: ${({ theme }) => theme.purple};
  font-size: 1em;
  font-weight: bold;
  text-decoration: none;
  position: relative;

  &::after {
    height: 8px;
    width: 8px;
    content: '';
    background-color: ${({ theme }) => theme.purple};
    position: absolute;
    top: 50%;
    left: -15px;
    transform: translateY(-50%);
    border-radius: 50%;
  }
`;

const Header = ({ siteTitle = '' }: Props) => (
  <StyledHeader>
    <h1>
      <Title to="/">{siteTitle}</Title>
    </h1>
    <AboutUs to="/about">About Us</AboutUs>
  </StyledHeader>
);

export default Header;
