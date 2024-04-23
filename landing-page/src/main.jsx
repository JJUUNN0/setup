import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";

const theme = {
  primary: "white",
  second: "#f0ff",
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider
      theme={{theme}}
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
