import React, { Fragment } from "react";
import { MarketingApp } from "./components/MarketingApp";

export const App = () => {
  return (
    <Fragment>
      <h2>We are at the container repository of my microfrontend</h2>
      <hr />
      <MarketingApp />
    </Fragment>
  );
};
