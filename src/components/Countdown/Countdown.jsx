import { useEffect, useState } from "react"
import '../Countdown/Countdown.css'

const Countdown = ({finishDate, countdownStarted}) => {
    const [time, setTime] = useState('');
    /* Las comillas vacias '' representan el valor inicial del estado. En este caso estoy estableciendo que el estado del tiempo es una cadena vacia, al igual que estoy haciendo en DifgitalClock.jsx al almacenar el tiempo actual en una cadena de texto */
    useEffect(()=>{
        let countdownDate = new Date(finishDate).getTime();
        //.getTime --> Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
        //SE INCLUYE UN INTERVALO PARA QUE LA FUNCION getTime SE EJECUTE SEGUNDO A DEGUNDO
        let interval
        if (countdownStarted){
        interval = setInterval(()=> {  
            let now = new Date().getTime();
        //Ahora debo calcular la distancia entre now y countdownDate  
            let distance = countdownDate - now;

            //Math.floor redondea siempre para abajo
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            //calcula el numero de dias restantes en la diferencia de tiempo. Divide la diferencia de tiempo (distance) por el número de milisegundos en un dia.

            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            //calcula el número de horas restantes después de calcular los días. Utiliza % para obtener el resto después de dividir distance por el número de milisegundos en un día. Luego, divide este resto por el número de milisegundos en una hora.

            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            //calcula el número de minutos restantes después de calcular los días y las horas. Utiliza el operador de módulo (%) para obtener el resto después de dividir distance por el número de milisegundos en una hora. Luego, divide este resto por el número de milisegundos en un minuto (1000 * 60).

            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            //calcula el número de segundos restantes después de calcular los días, horas y minutos. Utiliza % para obtener el resto después de dividir distance por el número de milisegundos en un minuto. Luego, divide este resto por mil para obtener el número de segundos.
  

            //MENSAJE PARA INDICAR QUE EL COUNTDOWN HA TERMINADO
            if (distance < 0){
                clearInterval(interval);
                setTime('🏁')
            } else {
                //AHORA SE DEBE CONCATENAR PARA SETEAR EL TIEMPO
            setTime('⏳ ' + days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
            }
        }, 1000);// Y LO DETENGA EN UN INTERVALO DE 1000 MILISEGUNDOS
      } else {
       setTime('00:00:00')
      }

        return () => clearInterval(interval) // se limpia el intervalo
    }, [finishDate, countdownStarted]);
  return (
    <div className="countdown">
      {time}
    </div>
  )
}

export default Countdown
