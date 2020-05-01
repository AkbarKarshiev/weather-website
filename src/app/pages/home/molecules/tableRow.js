import React from 'react'
import {
  WeatherIcon
} from '../../../components/ui'

const TableRow = ({weekDay, date, weatherCode, minTemp, maxTemp}) => {
  return (
    <tr>
      <td>
        <p className="font-weight-bold">{weekDay}</p>
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
        <p className="forecast-day">{'+' + maxTemp + '°'}</p>
        <p className="text-muted">{'+' + minTemp + '°'}</p>
      </td>
      <td>
        {weatherCode}
      </td>
    </tr>
  )
}
// <p className="font-weight-bold red-text">Week day</p>

export default TableRow
