import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

// Micro-frontend
import { AuthApp } from "./components/AuthApp";
import { MarketingApp } from "./components/MarketingApp";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <AuthApp /> */}
        <Route path='/auth/*' element={<AuthApp />} />
        <Route path='/marketing/*' element={<MarketingApp />} />
        <Route path='/*' element={<MarketingApp />} />
      </Routes>
    </BrowserRouter>
  );
};
