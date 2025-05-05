import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import LoaderLogo from "./components/Loader/LoaderLogo";
import { Blend } from "lucide-react";
import signL from '../src/assests/images/sig-light.png';
import signD from '../src/assests/images/sig-dark.png';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(darkTheme);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  const toggleTheme = () => {
    console.log("Changing Theme.....");
    setTheme(prevTheme => prevTheme === lightTheme ? darkTheme : lightTheme);
  };
  return (

    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {loading ? (
          <LoaderLogo onAnimationEnd={() => setLoading(false)} theme={theme} />
        ) : (
          <Main theme={theme} toggleTheme={toggleTheme} icon={theme === lightTheme ? <i class="fa-regular fa-moon"></i> : <i class="fa-regular fa-sun"></i>} sign={theme === lightTheme ? signD : signL} />
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
