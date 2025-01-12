// GlobalStyle.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.fonts.body};
    color: ${(props) => props.theme.colors.dark};
    background-color: ${(props) => props.theme.colors.light};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.heading};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    body {
      font-size: 14px;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    body {
      font-size: 18px;
    }
  }
`;

