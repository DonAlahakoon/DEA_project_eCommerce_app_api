import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./styles/general.css";
import "./styles/main-card-container.css";
import "./styles/card.css";
import "./styles/navBar.css";
import "./styles/sideBar.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
