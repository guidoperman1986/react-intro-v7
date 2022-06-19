// /* global React ReactDOM */ for fixing React import for eslint to not yell error
import { render } from "react-dom";
import { StrictMode, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { SearchParams } from "./SearchParams";
import WrappedDetails from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<WrappedDetails />}></Route>
            <Route path="/" element={<SearchParams />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
