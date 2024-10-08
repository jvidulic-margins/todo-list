import React from "react";
import ReactDOM from "react-dom/client";

import { AppProviders } from "./AppProviders";

import "./index.css";
// import "@radix-ui/themes/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProviders />
  </React.StrictMode>
);
