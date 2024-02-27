import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
//import "./App.scss";
import variables from "./App.scss";

console.log(variables, "import { someColor }");

const el = document.getElementById("app");

hydrateRoot(el, <App />);
