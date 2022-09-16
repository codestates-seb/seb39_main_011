import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #e5e5e5;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
