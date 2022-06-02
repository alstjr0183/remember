import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

  ${reset}

  * {
    /* letter-spacing: 0.06em;  */
    box-sizing: border-box;
  }

  html{
    font-size: 16px;
    font-family: 'Noto Sans KR', sans-serif;     
  };
  
  body {  
    font-family: 'Noto Sans KR', sans-serif;
  } 

  select,
  input, 
  button,
  textarea {
    border: 0;
    outline: 0 !important;
  }
  
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
