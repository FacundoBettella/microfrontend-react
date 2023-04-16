import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";
import { useLocation, useNavigate } from "react-router-dom";

export const MarketingApp = () => {
  const ref = useRef(null);

  const navigate = useNavigate(); /* Copia del container BrowserRouter  */

  const location = useLocation(); /* localizacion del container */

  useEffect(() => {

    /** 
     * Utilizamos la fn "mount" para cargar la app al contenedor. 
     * 
      A su vez, esta devuelve la función "onParentNavigate" que se utiliza 
      para notificar a la app "hija" sobre el path del container para que sea actualizado
      en caso de ser distintos.

      Cuando montamos la app hija con la funcion "onNavigate" posibilitamos
      colocar en el path del contendor (BrowserHistory) la actual localización (MemoryHistorry) 
      proveniente de la app "hija".
    */
    const { onParentNavigate } = mount(ref.current, 
      {
        onNavigate: ({ pathname: nextPathname }) => {
          const { pathname: containerPath } = location;
          
          if (containerPath !== nextPathname) {
            navigate(nextPathname);
          }
        },
      }
    );

    onParentNavigate(location);
    
  }, [location.pathname]);
  
  return <div ref={ref} />;
};
