import React from "react";
import { createRoot } from "react-dom/client";

import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createMemoryHistory, createBrowserHistory } from "history";

import { App } from "./App";

let root;

/* Mount fn para iniciar la App en modo-microfrontend */
const mount = (htmlRootElement, { onNavigate, defaultHistory }) => {

  /* Verificar si ya se ha creado un objeto root para el contenedor */
  if (!root) {
    /* Si no existe, crear un nuevo objeto root utilizando createRoot */
    root = createRoot(htmlRootElement);
  }

  /* 
  createMemoryHistory(): 
  es una función que se utiliza en la biblioteca history para crear un objeto de historial 
  basado en la memoria en lugar de la barra de direcciones del navegador. 
  Este objeto de historial se almacena en la memoria de la aplicación y no está vinculado a 
  la URL en la barra de direcciones del navegador.
  */
  const history =  defaultHistory || createMemoryHistory();

  /* Para evitar un error en modo-Isolation */
  if (onNavigate) {
    history.listen(() => onNavigate(history.location));
  }

  root.render(
    <HistoryRouter history={history}>
      <App history={history} />
    </HistoryRouter>
  );

  /**
   * Recibimos desde la app "padre" su localizacion actual (path).
   */
  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      history.push(nextPathname);
    },
  };
};



/* mode-ISOLATION: Si estamos en development y aislados del contenedor corremos "mount" fn de inmediato */
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("marketing-dev-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

/* Caso contrario, la exportamos mediante module.federation para que la app sea montado por el contenedor */
export { mount };
