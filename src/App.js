/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
// 개발자 라이브러리
import Route from "./routes/FrontRoute";
// components
// css
import "./styles/font.css";
import theme from "./styles/utils/theme";
import GlobalStyle from "./styles/globalStyle";
import { setOneVh } from "./styles/utils/styledFunction";

function App() {
  useEffect(() => {
    setOneVh();
    window.addEventListener("resize", setOneVh);
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Route />
      </ThemeProvider>
    </>
  );
}

export default App;
