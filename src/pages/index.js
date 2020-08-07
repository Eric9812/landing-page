import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ModeContext } from "../context";
import { GlobalStyle, darkMode, lightMode } from "../theme";

import routes from "./routes";

const App = () => {
  const store = localStorage.getItem("mode");
  const [mode, setMode] = React.useState(store || "light");
  return (
    <BrowserRouter>
      <ModeContext.Provider value={{ mode, setMode }}>
        <ThemeProvider theme={mode === "light" ? lightMode : darkMode}>
          <GlobalStyle />
          <Switch>
            {routes.map((props, index) => (
              <Route key={index} {...props} />
            ))}
          </Switch>
        </ThemeProvider>
      </ModeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
