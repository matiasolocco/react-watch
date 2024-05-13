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


const App = () => {

  const [finishDate, setFinishDate] = useState (new Date())
  const handleDateChange = (date) => {
    setFinishDate(date);
    
  }
  return (
    <div className="appStyle">
      <div >
      <div className="appStyle-clock">
        <h1>🕐</h1>
        <DigitalClock/>
      </div>
      <div>
        <h1>⏲️</h1>
        <DateTimePicker
          onChange={handleDateChange}
          value={finishDate}
          format="dd/MM/yyyy HH:mm"
          disableClock={true}
        />
        <div>
          <p>{finishDate.toTimeString}</p>
        </div>
      </div>
      
      <Countdown finishDate = {finishDate}/>
      <h1>⏱️</h1>
      <Stopwatch/>
      </div>
    </div>
  )
    
  
}
export default App
