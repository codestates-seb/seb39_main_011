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

  * .rdp {
    --rdp-cell-size: 37px;
    --rdp-accent-color: #0000ff;
    --rdp-background-color: #e7edff;
    --rdp-accent-color-dark: #3003e1;
    --rdp-background-color-dark: #180270;
    --rdp-outline: 2px solid var(--rdp-accent-color);
    --rdp-outline-selected: 3px solid var(--rdp-accent-color);
    margin: 0;
  }

  * .rdp-day_selected, .rdp-day_selected:focus-visible, .rdp-day_selected:hover {
    color: white;
    opacity: 1;
    background-color: #7b6250;
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
