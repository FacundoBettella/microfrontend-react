import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

import { Pricing } from "./components/Pricing";
import { Landing } from "./components/Landing";

export const App = ({ onNavigate }) => {
  /* 
  createMemoryHistory() => es una función que se utiliza en la biblioteca history para crear un objeto de historial basado en la memoria en lugar de la barra de direcciones del navegador. Este objeto de historial se almacena en la memoria de la aplicación y no está vinculado a la URL en la barra de direcciones del navegador.
  */
  const history = createMemoryHistory();

  history.listen(() => onNavigate(history.location));

  return (
    <Fragment>
      <HistoryRouter history={history}>
        <Routes>
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/' element={<Landing />} />
          <Route path='/*' element={<Landing />} />
        </Routes>
      </HistoryRouter>
    </Fragment>
  );
};
