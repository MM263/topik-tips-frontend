import React, { ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Header from "./Header";
import GlobalStyle from "./styles/GlobalStyle";

export interface Props {
  children: ReactNode;
}

const StyledMain = styled.main`
  max-width: 800px;
  margin: 0 auto;
  font-kerning: normal;
  font-feature-settings: "kern", "liga", "clig", "calt";
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
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <StyledMain>{children}</StyledMain>
    </>
  );
};

export default Layout;
