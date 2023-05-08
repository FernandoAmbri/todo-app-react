import React from "react";
import ReactDOM from "react-dom/client";

import Storage from "./logic/Storage";

import "./index.css";
import App from "./App";

const storage = new Storage();
storage.loadDataStorage();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App storage={storage} />
  </React.StrictMode>
);
