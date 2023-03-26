import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

const mount = (htmlRootElement) => {
  const root = createRoot(htmlRootElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// if we are in development and in isolation call mount fn immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container and we should export the mount fn
export { mount };
