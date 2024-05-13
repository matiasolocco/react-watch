import React, { useState, useEffect } from 'react';
import '../DigitalClock/DigitalClock.css';

const DigitalClock = () => {
    //variable de estado --> estado inicial del reloj
  const [clockState, setClockState] = useState();

  useEffect(() => {
    //configuracion de un intervalo para actualizar el reloj cada segundo
    const interval = setInterval(() => {
      const date = new Date();
      //actualizar el estado del reloj a la hora actual en string
      setClockState(date.toLocaleTimeString());
    }, 1000);
      /*este metodo devuelve una cadena con una representación de la parte del tiempo de esta fecha sensible al idioma. Los nuevos argumentos locales y options le permiten a la aplicación especificar el idioma cuyas convenciones de formato deben usarse y personalizan el comportamiento de esta función. 
      From MND Docs*/

    return () => clearInterval(interval);//limpiar intervalo
  }, []);

  //RENDERIZADO
    return (
    <div className="appStyle-clock">
      {/* <h1>🕐</h1> */}
      {clockState}
    </div>
  );
};

export default DigitalClock;
