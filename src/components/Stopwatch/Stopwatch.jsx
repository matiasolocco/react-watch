import { useEffect, useState } from "react"


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
      <div>
         
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      
      <div id="buttons">
          {!timerOn && time === 0 && (<button onClick={() => setTimerOn(true)}>⏯️</button>)}

          {timerOn && (<button onClick={() => setTimerOn(false)}>⏸️</button>)}
          
          {!timerOn && time > 0 && (<button onClick={() => setTimerOn(true)}>⏯️</button>)}
          
          {!timerOn && time > 0 && (<button onClick={() => setTime(0)}>⏹️</button>)}      
      </div>

    </div>
  )
}

export default Stopwatch