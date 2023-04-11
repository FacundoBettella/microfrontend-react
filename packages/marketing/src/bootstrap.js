import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

let root;

// Mount function to start up the app
const mount = (htmlRootElement, { onNavigate }) => {
  // Verificar si ya se ha creado un objeto root para el contenedor
  if (!root) {
    // Si no existe, crear un nuevo objeto root utilizando createRoot
    root = createRoot(htmlRootElement);
  }

  // Renderizar el componente raíz de la aplicación en el objeto root
  root.render(<App onNavigate={onNavigate} />);
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
