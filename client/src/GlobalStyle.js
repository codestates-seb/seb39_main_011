import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    /* 아래로 갈수록 연해짐 */
    --main-color-0: #7B6250;
    --main-color-1 : #AD8B73;
    --main-color-2 : #CEAB93;
    --main-color-3 : #E3CAA5;
    --main-color-4 : #F7EDDB;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  /* ========== 캘린더 ========== */
  * .rdp {
    --rdp-cell-size: 37px;
    --rdp-accent-color: #0000ff;
    --rdp-background-color: #e7edff;
    --rdp-accent-color-dark: #3003e1;
    --rdp-background-color-dark: #180270;
    --rdp-outline: 2px solid var(--rdp-accent-color);
    --rdp-outline-selected: 3px solid var(--rdp-accent-color);
    margin: 0 0 5px 0;
  }
  * .rdp-day_selected, .rdp-day_selected:focus-visible, .rdp-day_selected:hover {
    color: white;
    opacity: 1;
    background-color: #7b6250;
  }
  /* =========================== */
  
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
