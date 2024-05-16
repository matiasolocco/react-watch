import { useEffect, useState } from "react"
import '../Stopwatch/Stopwatch.css'
//npm i --save @fortawesome/fontawesome-svg-core
//npm i --save @fortawesome/free-solid-svg-icons
//npm i --save @fortawesome/free-regular-svg-icons
//npm i --save @fortawesome/react-fontawesome@latest
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faRotateBack, faStop } from "@fortawesome/free-solid-svg-icons";


const Stopwatch= () => {
    const [time, setTime] = useState(0);// valor por defecto
    const [timerOn, setTimerOn] = useState(false);//el cronometro no estara activado al arrancar la app

    //Defino useEffect que corra cada vez que el valor de timerOn cambie, ya que por defecto correría cada vez que se renderice la aplicación y solo quiero que tenga efecto cuando se active el cronómetro.
    useEffect(()=>{
        let interval = null;
        if (timerOn){
            interval = setInterval(()=>{
                setTime((prevTime) => prevTime + 10)
            },10);
        } else {
            clearInterval(interval);
        }
        return() => clearInterval(interval);
    }, [timerOn])



  return (
    <div className="stopwatch">
      {/* Botones del cronometro para controlar la función */}
      <div className="counter">
         
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      
      <div className="buttons">
            {/* START */}
          {!timerOn && time === 0 && (<div onClick={() => setTimerOn(true)}>
              <FontAwesomeIcon  id="btnStart" icon={faPlay} />
           </div>)}
            {/* PAUSE*/}
          {timerOn && (<div onClick={() => setTimerOn(false)}><FontAwesomeIcon id="btnPause" icon={faPause} /></div>)}
          {/* RESTART */}
          {!timerOn && time > 0 && (<div onClick={() => setTimerOn(true)}><FontAwesomeIcon id="btnRestart" icon={faRotateBack} /></div>)}
          {/* RESET */}
          {!timerOn && time > 0 && (<div onClick={() => setTime(0)}><FontAwesomeIcon id="btnReset" icon={faStop} /></div>)}      
      </div>

    </div>
  )
}

export default Stopwatch
