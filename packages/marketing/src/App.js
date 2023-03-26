import React, { Fragment } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Pricing } from "./components/Pricing";
import { Landing } from "./components/Landing";

export const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/' element={<Landing />} />
          <Route path='/*' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

