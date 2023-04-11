import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";
import { useNavigate } from "react-router-dom";

export const MarketingApp = () => {
  const ref = useRef(null);
  const navigate = useNavigate(); /* Copy of container BrowserRouter */

  useEffect(() => {
    mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        // console.log(nextPathname);
        
        // TODO: Check history.location
        navigate(nextPathname);
      },
    });
  });

  return <div ref={ref} />;
};
