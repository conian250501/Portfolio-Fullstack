import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";

import "./global/styles/globalStyles.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./global/styles/customBreakpoints";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </CssBaseline>
    </Router>
  </React.StrictMode>
);
