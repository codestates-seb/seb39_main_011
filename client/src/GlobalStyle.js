import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    /* 아래로 갈수록 연해짐 */
  --main-color-1 : #AD8B73;
  --main-color-2 : #CEAB93;
  --main-color-3 : #E3CAA5;
  --main-color-4 : #FFFBE9;
  }

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
    padding-top: 54px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  textarea {
    resize: none;
  }
`;

export default GlobalStyle;
