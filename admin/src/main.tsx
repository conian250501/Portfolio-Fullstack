import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// CSS styles
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./global/styles/customThemes";
import "./global/styles/globalStyles.scss";
import "react-toastify/dist/ReactToastify.css";

// Store
import { Provider } from "react-redux";
import store from "./app/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </CssBaseline>
  </React.StrictMode>
);
