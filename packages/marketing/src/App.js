import React, { Fragment } from "react";
import { Routes, Route, MemoryRouter, Router } from "react-router-dom";

import { Pricing } from "./components/Pricing";
import { Landing } from "./components/Landing";

export const App = ({ history }) => {
  return (
    <Fragment>
      <MemoryRouter history={history}>
        <Routes>
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/' element={<Landing />} />
          <Route path='/*' element={<Landing />} />
        </Routes>
      </MemoryRouter>
    </Fragment>
  );
};
