import React from "react";
import { Routes, Route } from "react-router-dom";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { Pricing } from "./components/Pricing";
import { Landing } from "./components/Landing";

export const App = ({ history }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (history.location.pathname === location.pathname) return;
    navigate(history.location.pathname);
  }, [history.location]);

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/*' element={<Landing />} />
      <Route path='/pricing' element={<Pricing />} />
    </Routes>
  );
};
