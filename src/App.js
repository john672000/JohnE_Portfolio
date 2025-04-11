import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { blueTheme } from "./theme";
import { GlobalStyles } from "./global";
import LoaderLogo from "./components/Loader/LoaderLogo";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);
  return (

    <ThemeProvider theme={blueTheme}>
      <>
        <GlobalStyles />
        {loading ? (
          <LoaderLogo onAnimationEnd={() => setLoading(false)} />
        ) : (
          <Main theme={blueTheme} />
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
