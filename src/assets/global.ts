import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
  }
  body {
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
    background-color: ${props => props.theme.colors.mainBackgroundColor};
    color: ${props => props.theme.colors.fontColorDark};
  }
  a {
    text-decoration: none;
    &:visited,
    &:active {
    }
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;
