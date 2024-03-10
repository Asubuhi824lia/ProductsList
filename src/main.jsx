import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.scss";
import { GoodsContextProvider } from "./context/GoodsProvider";
import { StatusContextProvider } from "./context/StatusProvider";
import { PagesNumContextProvider } from "./context/PagesNumProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoodsContextProvider>
      <StatusContextProvider>
        <App />
      </StatusContextProvider>
    </GoodsContextProvider>
  </React.StrictMode>
);
