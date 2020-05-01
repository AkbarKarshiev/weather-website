import React from 'react'

import {
  WeatherIcon,
  LinkButton
} from '../../../components/ui'

const TableRow = ({weekDay, date, weatherCode, weatherDesrb, minTemp, maxTemp, hourlyHandler}) => {
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
      {hourlyHandler !== undefined &&
        <td>
          <div className="view-hourly-btn">
            <LinkButton 
              name="go"
              clicked={hourlyHandler}/>
          </div>
        </td>
      }
    </tr>
  )
}
// <p className="font-weight-bold red-text">Week day</p>

export default TableRow
