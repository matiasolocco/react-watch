import { useState } from "react"
import Countdown from "./Countdown/Countdown"
import DigitalClock from "./DigitalClock/DigitalClock"
import Stopwatch from "./Stopwatch/Stopwatch"
import '../scss/App.css'
//npm install react-datetime-picker 
import DateTimePicker from "react-datetime-picker"
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';


import { faHourglassStart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const App = () => {

  const [finishDate, setFinishDate] = useState (new Date())
  const [countdownStarted, setCountdownStarted] = useState(false);
  
  const handleDateChange = (date) => {
    setFinishDate(date);
  }
  
  const startCountdown = () => {
    setCountdownStarted(true);
  };

  return (
    
      <div className="appStyle">
        <div>
        <div className="clockStyle">
        <DigitalClock/>
        </div>
        <div className="appStyle-countdown">  
          <DateTimePicker
            onChange={handleDateChange}
            value={finishDate}
            format="dd/MM/yyyy HH:mm"
            disableClock={true}/>
            <p className="toTimeString">{finishDate.toTimeString}</p>
          <Countdown finishDate = {finishDate} countdownStarted={countdownStarted}/>
          <div onClick={startCountdown}><FontAwesomeIcon icon={faHourglassStart}/></div>
        </div>

        <div className="appStyle-stopWatch">
        <Stopwatch/>
        </div>
        
        </div>
      </div>
   
  )
    
  
}
export default App

