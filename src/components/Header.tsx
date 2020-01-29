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
  color: ${({ theme }) => theme.black};
`;

const AboutUs = styled(Link)`
  color: ${({ theme }) => theme.purple};
  font-size: 1.1em;
  font-weight: bold;
  text-decoration: none;
  position: relative;

  &::after {
    height: 8px;
    width: 8px;
    content: "";
    background-color: ${({ theme }) => theme.purple};
    position: absolute;
    top: 50%;
    left: -15px;
    transform: translateY(-50%);
    border-radius: 50%;
  }
`;

const Header = ({ siteTitle = "" }: Props) => (
  <StyledHeader>
    <h1>
      <Title to="/">{siteTitle}</Title>
    </h1>
    <AboutUs to="/about">About Us</AboutUs>
  </StyledHeader>
);

export default Header;
