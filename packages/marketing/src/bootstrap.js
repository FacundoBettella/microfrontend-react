import React from "react";
import { createRoot } from "react-dom/client";
import { createMemoryHistory } from "history";
import { App } from "./App";

// Mount function to start up the app
const mount = (htmlRootElement) => {

  /* 
  createMemoryHistory() => es una función que se utiliza en la biblioteca history para crear un objeto de historial basado en la memoria en lugar de la barra de direcciones del navegador. Este objeto de historial se almacena en la memoria de la aplicación y no está vinculado a la URL en la barra de direcciones del navegador.
  */
  const history = createMemoryHistory();

  const root = createRoot(htmlRootElement);

  root.render(
    <React.StrictMode>
      <App history={history}/>
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
