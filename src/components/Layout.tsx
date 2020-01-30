import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';

import Header from './Header';
import GlobalStyle from './styles/GlobalStyle';

import '../../static/fonts/fonts.css';

export interface Props {
  children: ReactNode;
}

const StyledMain = styled.main`
  max-width: 800px;
  margin: 0 auto;
  font-kerning: normal;
  font-feature-settings: 'kern', 'liga', 'clig', 'calt';
`;

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <ThemeProvider
        theme={{
          black: '#393939',
          purple: '#4132c9',
          yellow: '#ffe197',
        }}
      >
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledMain>{children}</StyledMain>
      </ThemeProvider>
    </>
  );
};

export default Layout;
