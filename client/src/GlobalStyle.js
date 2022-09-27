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

    /* --main-color-1 : #7D5A50;
    --main-color-2 : #B4846C;
    --main-color-3 : #E5B299;
    --main-color-4 : #FCDEC0; */
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
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
