import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1;
    font-family: 'Jost', 'GothicA1', sans-serif;
    color: #393939;
    background-color: #FFE197;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
