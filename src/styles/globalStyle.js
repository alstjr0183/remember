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

          /* noto 14 */
          .notob10 {
        font-family: NoToB;
        font-size: 10px;
        line-height: 12px;
      }
      .notom10 {
        font-family: NoToM;
        font-size: 10px;
        line-height: 12px;
      }
      .notor10 {
        font-family: NoToR;
        font-size: 10px;
        line-height: 12px;
      }

            /* noto 14 */
            .notob14 {
        font-family: NoToB;
        font-size: 14px;
        line-height: 24px;
      }
      .notom14 {
        font-family: NoToM;
        font-size: 14px;
        line-height: 24px;
      }
      .notor14 {
        font-family: NoToR;
        font-size: 14px;
        line-height: 24px;
      }


            /* noto 18 */
            .notob18 {
        font-family: NoToB;
        font-size: 18px;
        line-height: 28px;
      }
      .notom18 {
        font-family: NoToM;
        font-size: 18px;
        line-height: 28px;
      }
      .notor18 {
        font-family: NoToR;
        font-size: 18px;
        line-height: 28px;
      }


            /* noto 24 */
            .notob24 {
        font-family: NoToB;
        font-size: 24px;
        line-height: 32px;
      }
      .notom24 {
        font-family: NoToM;
        font-size: 24px;
        line-height: 32px;
      }
      .notor24 {
        font-family: NoToR;
        font-size: 24px;
        line-height: 32px;
      }
`;

export default GlobalStyle;
