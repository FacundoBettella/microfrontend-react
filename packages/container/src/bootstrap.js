import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const devRoot = document.getElementById("container-dev-root");
const root = createRoot(devRoot);

root.render(<App />);
