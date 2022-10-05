import GlobalStyles from "./styles/Global.styles";
import { ThemeProvider } from "styled-components";

import { light } from "./styles/Theme";

import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </ThemeProvider>
    </>
  );
};

export default App;
