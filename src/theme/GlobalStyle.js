import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    cursor:pointer;
  }

  button:focus, input:focus {
    outline: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
