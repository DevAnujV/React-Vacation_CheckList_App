import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";

const rootAppend = ReactDOM.createRoot(document.getElementById("root"));
rootAppend.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
