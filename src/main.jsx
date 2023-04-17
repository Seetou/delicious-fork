import React from "react";
import ReactDOM from "react-dom/client";
import GlobalContext from "./Components/GlobalContext";
import App from "./App";

import "./assets/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContext>
    <App />
  </GlobalContext>
);
