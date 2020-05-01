import React from 'react'
import {
  WeatherIcon
} from '../../../components/ui'

const TableRow = ({weekDay, date, weatherCode, weatherDesrb, minTemp, maxTemp}) => {
  let weekDayClass = '';
  if(weekDay === "Saturday" || weekDay === "Sunday" || weekDay === "Sat" || weekDay === "Sun") {
    weekDayClass = "font-weight-bold" + " red-text";
  } else weekDayClass = "font-weight-bold";

  return (
    <tr>
      <td>
        <p className={weekDayClass}>{weekDay}</p>
        <p>{date}</p>
      </td>
      <td>
        <WeatherIcon 
          type={weatherCode}
          style={{
            width: "40px", 
            height: "40px", 
            float: "left",
            marginRight: "5px"}}/>
        <p className="forecast-day">{maxTemp}</p>
        <p className="text-muted">{minTemp}</p>
      </td>
      <td>
        {weatherDesrb}
      </td>
    </tr>
  )
}
// <p className="font-weight-bold red-text">Week day</p>

export default TableRow
