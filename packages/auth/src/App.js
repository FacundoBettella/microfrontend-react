import React from "react";
import { Routes, Route } from "react-router-dom";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

export const App = ({ history }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (history.location.pathname === location.pathname) return;
    
    navigate(history.location.pathname);
  }, [history.location]);

  return (
    <>
      <Routes>
        <Route path='/auth/signup' element={<SignUp />} />
        <Route path='/auth/signin' element={<SignIn />} />
        <Route path='/*' element={<SignIn />} />
      </Routes>
    </>
  );
};
