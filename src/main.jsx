import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ComingSoon from "./ComingSoon.jsx";
import "./styles.css";

// Flip to `false` to bring the full site back online.
const COMING_SOON = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {COMING_SOON ? <ComingSoon /> : <App />}
  </React.StrictMode>
);
